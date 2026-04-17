import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useNavigate } from 'react-router-dom'
const L1_1C = () => {
const navigate = useNavigate();

const sampleCode = `// ユーザーからの入力をサニタイズする関数の例
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}   

// 投稿内容を表示する際にサニタイズする
<div dangerouslySetInnerHTML={{ __html: sanitizeInput(post.message) }} />`

  return (
    <div className="container w-full h-screen mx-auto px-4 py-8 align-middle">
        <h1 className="text-3xl font-bold text-center">Level 1-1 Clear!</h1>
        <h1 className="text-2xl font-semibold mt-4">解説</h1>
        <h2 className="text-xl font-semibold mt-2">XSS攻撃</h2>
        <p className="">
            今回のレベルでは、匿名掲示板に投稿する際に、JavaScriptコードを含む内容を投稿することで、タイムラインで表示される仕組みを観察しました。これにより、XSS（クロスサイトスクリプティング）攻撃の一例を体験することができます。
        </p>
        <p className="mt-2">
            XSS攻撃は、攻撃者が悪意のあるスクリプトをウェブサイトに注入し、他のユーザーがそのスクリプトを実行してしまう攻撃手法です。今回のレベルでは、投稿内容にJavaScriptコードを含めることで、タイムライン上でそのコードが実行されることを観察しました。
        </p>
        <p className="mt-2">
            このような攻撃は、ユーザーの個人情報の盗難やセッションハイジャックなど、様々な悪影響を引き起こす可能性があります。ウェブアプリケーションを開発する際には、ユーザーからの入力を適切にサニタイズし、XSS攻撃を防止することが重要です。
        </p>
        <h2 className="text-xl font-semibold mt-4">対策</h2>
        <p className="mt-2">
            今回の掲示板では、ユーザーが投稿した内容をdangerouslySetInnerHTMLを使用して表示しているため、JavaScriptコードが実行されてしまいました。これを防ぐためには、ユーザーからの入力を適切にエスケープするか、サニタイズする必要があります。
        </p>
        <SyntaxHighlighter language="javascript" style={oneDark} className="rounded">
            {sampleCode}
        </SyntaxHighlighter>
        <div className='flex items-center justify-center mt-8 gap-6'>
            <button className="bg-orange-500 hover:bg-white text-black font-bold py-2 px-4 rounded mt-15" onClick={() => navigate('/')}>
                ホームに戻る
            </button>
            <button className="bg-orange-500 hover:bg-white text-black font-bold py-2 px-4 rounded mt-15" onClick={() => navigate('/level1-2')}>
                次のレベルへ
            </button>
        </div>
    </div>
  )
}

export default L1_1C