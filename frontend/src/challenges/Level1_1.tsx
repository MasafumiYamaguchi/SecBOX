import { use, useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import Clear from '../components/Clear'
import { useNavigate } from 'react-router-dom'

type Post = {
  id: number
  author: string
  message: string
  createdAt: string
}

type AlertEvent = {
  id: number
  message: string
  firedAt: string
}

const INITIAL_POSTS: Post[] = [
  {
    id: 1,
    author: 'alice',
    message: 'はじめまして。セキュリティ学習用の掲示板です。',
    createdAt: '2026-04-18 09:10',
  },
  {
    id: 2,
    author: 'bob',
    message: 'ここに自由に投稿できます。',
    createdAt: '2026-04-18 09:15',
  },
]

const Level1_1 = () => {
  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS)
  const [alertEvents, setAlertEvents] = useState<AlertEvent[]>([])

  const navigate = useNavigate();

  useEffect(() => {
    const originalAlert = window.alert.bind(window)

    window.alert = (value?: unknown) => {
      const now = new Date()
      const firedAt = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
        now.getDate(),
      ).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(
        now.getSeconds(),
      ).padStart(2, '0')}`

      setAlertEvents((current) => [
        {
          id: current.length + 1,
          message: value == null ? '(empty)' : String(value),
          firedAt,
        },
        ...current,
      ])

      originalAlert(value as string | undefined)
    }

    return () => {
      window.alert = originalAlert
    }
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextAuthor = author.trim()
    const nextMessage = message.trim()
    if (!nextAuthor || !nextMessage) {
      return
    }

    const now = new Date()
    const createdAt = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
      now.getDate(),
    ).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

    setPosts((currentPosts) => [
      {
        id: currentPosts.length + 1,
        author: nextAuthor,
        message: nextMessage,
        createdAt,
      },
      ...currentPosts,
    ])
    setAuthor('')
    setMessage('')
  }

  useEffect(() => {
    if (alertEvents.length === 0) {
        return
    }
    navigate('/level1-1/clear')
  }, [alertEvents, navigate])

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <section className="mb-6 rounded-xl border border-zinc-700 bg-zinc-900/60 p-5">
        <h2 className="text-2xl font-bold">Level 1-1: BBS</h2>
        <p className="mt-2 text-sm text-zinc-300">匿名掲示板に投稿し、タイムラインで表示される仕組みを観察しよう。</p>
      </section>

      <section className="mb-8 rounded-xl border border-zinc-700 bg-zinc-900/60 p-5">
        <h3 className="mb-4 text-lg font-semibold">新規投稿</h3>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm text-zinc-300" htmlFor="author">
              名前
            </label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              className="w-full rounded-md border border-zinc-600 bg-black px-3 py-2 text-white"
              placeholder="guest123"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-zinc-300" htmlFor="message">
              本文
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="min-h-28 w-full rounded-md border border-zinc-600 bg-black px-3 py-2 text-white"
              placeholder="投稿内容を入力"
            />
          </div>

          <button type="submit" className="rounded-md bg-orange-500 px-4 py-2 font-semibold text-black hover:bg-orange-400">
            投稿する
          </button>
        </form>
      </section>

      <section className="rounded-xl border border-zinc-700 bg-zinc-900/60 p-5">
        <h3 className="mb-4 text-lg font-semibold">投稿一覧</h3>
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.id} className="rounded-lg border border-zinc-700 bg-zinc-950 p-3">
              <div className="mb-2 flex items-center justify-between text-xs text-zinc-400">
                <span>@{post.author}</span>
                <time>{post.createdAt}</time>
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.message }} />
            </li>
          ))}
        </ul>
      </section>

    </main>
  )
}

export default Level1_1
