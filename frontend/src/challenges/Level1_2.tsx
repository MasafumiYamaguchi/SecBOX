import { useEffect, useState } from 'react'
type Content = {
    title: string;
    description: string;
    link: string;
}

const Level1_1 = () => {
    const [contents] = useState<Content[]>([
        {
            title: '美味しいおにぎりの作り方',
            description: '今回は、美味しいおにぎりの作り方を紹介します。おにぎりは、日本の伝統的な料理で、手軽に食べられることから人気があります。おにぎりを作るには、まずご飯を炊きます。次に、ご飯が炊き上がったら、適量のご飯を手に取ります。そして、お好みの具材を中央に置きます。最後に、ご飯を包み込むようにして形を整えます。これで、美味しいおにぎりの完成です！ぜひ試してみてください。',
            link: "https://cooking.com/onigiri-recipe"
        },
        {
            title: '美味しいパスタの作り方',
            description: '今回は、美味しいパスタの作り方を紹介します。パスタは、イタリアの代表的な料理で、世界中で愛されています。美味しいパスタを作るには、まず大きな鍋にたっぷりの水を沸かします。次に、沸騰したお湯に塩を加えます。そして、お好みのパスタを入れて、パッケージの指示通りに茹でます。茹で上がったら、ザルにあげて水気を切ります。最後に、お好みのソースと絡めて完成です！ぜひ試してみてください。',
            link: "https://cooking.com/pasta-recipe"
        },
        {
            title: '美味しいカレーの作り方',
            description: '今回は、美味しいカレーの作り方を紹介します。カレーは、インドの代表的な料理で、世界中で愛されています。美味しいカレーを作るには、まず油を熱して具材を炒めます。次に、スパイスを加えて香りを出すように炒めます。そして、水やコンソメを加えて煮込みます。最後に、お好みの具材を加えて完成です！ぜひ試してみてください。',
            link: "https://cooking.com/curry-recipe"
        },
        {
            title: '美味しいラーメンの作り方',
            description: '今回は、美味しいラーメンの作り方を紹介します。ラーメンは、日本の代表的な料理で、世界中で愛されています。美味しいラーメンを作るには、まずスープを作ります。次に、麺を茹でます。そして、お好みの具材を加えて完成です！ぜひ試してみてください。',
            link: "https://cooking.com/ramen-recipe"
        },
        {
            title: '美味しい寿司の作り方',
            description: '今回は、美味しい寿司の作り方を紹介します。寿司は、日本の伝統的な料理で、世界中で愛されています。美味しい寿司を作るには、まずお米を炊きます。次に、お米に酢を加えて調味料を混ぜます。そして、お好みの魚介類や野菜を添えて完成です！ぜひ試してみてください。',
            link: "https://cooking.com/sushi-recipe"
        }
    ]);

    const [query, setQuery] = useState('');

    const filtered = contents.filter((content) =>
        content.title.includes(query)
    );

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const filtered = contents.filter(content => content.title.includes(event.target.value));
        setQuery(event.target.value);
        return filtered;
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            const tmp = handleSearch(event as any);
            console.log(tmp);
        }
    }

    useEffect(() => {
        console.log(filtered);
    }, [filtered]);

  return (
    <div>
        <h1 className="text-3xl font-bold text-center absolute">Level 1-1</h1>
        <div className="container content-center mx-auto px-4 py-8 align-middle text-center">
            <input
                type="text"
                className="border bg-white text-black border-gray-300 rounded px-4 py-2 mt-20 w-full"
                placeholder="サイト内を検索する"
                onKeyDown={(event) => handleKeyDown(event)}
            />
            <div className="result text-start mt-8 mb-8" dangerouslySetInnerHTML={{ __html: filtered.map(content => `<div><style>.result h2 { color: #fff; } .result p { color: #666; } .result a { color: #007bff; text-decoration: underline; }</style><h2>${content.title}</h2><p>${content.description}</p><a href="${content.link}" class="text-blue-500 hover:underline">${content.link}</a></div>`).join('') }}>
            </div>
        </div>
    </div>
  )
}


export default Level1_1