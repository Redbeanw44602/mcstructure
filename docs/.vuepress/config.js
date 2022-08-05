module.exports = {
    title: 'MC TIL',
    base: '/mcstructure/',
    description: 'Some structure and enum information for minecraft bedrock edition.',
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom',
        ['vuepress-plugin-code-copy', true],
        ['@vuepress/search', {
            searchMaxSuggestions: 20
        }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/Redbeanw44602/mcstructure' }
        ],
        sidebar: {
            '/1.14.60.5/':[
                {
                    title: 'Struct',
                    collapsable: true,
                    sidebarDepth: 4,
                    children: [
                        ['structure/A.md','A'],
                        ['structure/B.md','B'],
                        ['structure/C.md','C'],
                        ['structure/D.md','D'],
                        ['structure/E.md','E'],
                        ['structure/F.md','F'],
                        ['structure/G.md','G'],
                        ['structure/H.md','H'],
                        ['structure/I.md','I'],
                        ['structure/J.md','J'],
                        ['structure/K.md','K'],
                        ['structure/L.md','L'],
                        ['structure/M.md','M'],
                        ['structure/N.md','N'],
                        ['structure/O.md','O'],
                        ['structure/P.md','P'],
                        ['structure/Q.md','Q'],
                        ['structure/R.md','R'],
                        ['structure/S.md','S'],
                        ['structure/T.md','T'],
                        ['structure/U.md','U'],
                        ['structure/V.md','V'],
                        ['structure/W.md','W'],
                        ['structure/X.md','X'],
                        ['structure/Z.md','Z'],
                        ['structure/`.md','`']
                    ]
                },
                {
                    title: 'Enums',
                    collapsable: true,
                    sidebarDepth: 4,
                    children: [
                        ['enums/A.md','A'],
                        ['enums/B.md','B'],
                        ['enums/C.md','C'],
                        ['enums/D.md','D'],
                        ['enums/E.md','E'],
                        ['enums/F.md','F'],
                        ['enums/G.md','G'],
                        ['enums/H.md','H'],
                        ['enums/I.md','I'],
                        ['enums/J.md','J'],
                        ['enums/K.md','K'],
                        ['enums/L.md','L'],
                        ['enums/M.md','M'],
                        ['enums/N.md','N'],
                        ['enums/O.md','O'],
                        ['enums/P.md','P'],
                        ['enums/R.md','R'],
                        ['enums/S.md','S'],
                        ['enums/T.md','T'],
                        ['enums/U.md','U'],
                        ['enums/V.md','V'],
                        ['enums/W.md','W'],
                        ['enums/X.md','X'],
                        ['enums/Z.md','Z'],
                        ['enums/`.md','`']
                    ]
                }
            ],
            '/1.16.201/':[
                {
                    title: 'Struct',
                    collapsable: true,
                    sidebarDepth: 4,
                    children: [
                        ['structure/A.md','A'],
                        ['structure/A~1.md','A~1'],
                        ['structure/B.md','B'],
                        ['structure/B~1.md','B~1'],
                        ['structure/B~2.md','B~2'],
                        ['structure/C.md','C'],
                        ['structure/C~1.md','C~1'],
                        ['structure/C~2.md','C~2'],
                        ['structure/C~3.md','C~3'],
                        ['structure/D.md','D'],
                        ['structure/D~1.md','D~1'],
                        ['structure/D~2.md','D~2'],
                        ['structure/D~3.md','D~3'],
                        ['structure/D~4.md','D~4'],
                        ['structure/D~5.md','D~5'],
                        ['structure/D~6.md','D~6'],
                        ['structure/D~7.md','D~7'],
                        ['structure/D~8.md','D~8'],
                        ['structure/D~9.md','D~9'],
                        ['structure/D~10.md','D~10'],
                        ['structure/E.md','E'],
                        ['structure/E~1.md','E~1'],
                        ['structure/F.md','F'],
                        ['structure/F~1.md','F~1'],
                        ['structure/G.md','G'],
                        ['structure/H.md','H'],
                        ['structure/I.md','I'],
                        ['structure/I~1.md','I~1'],
                        ['structure/I~2.md','I~2'],
                        ['structure/J.md','J'],
                        ['structure/K.md','K'],
                        ['structure/L.md','L'],
                        ['structure/L~1.md','L~1'],
                        ['structure/M.md','M'],
                        ['structure/M~1.md','M~1'],
                        ['structure/M~2.md','M~2'],
                        ['structure/M~3.md','M~3'],
                        ['structure/N.md','N'],
                        ['structure/O.md','O'],
                        ['structure/P.md','P'],
                        ['structure/P~1.md','P~1'],
                        ['structure/P~2.md','P~2'],
                        ['structure/P~3.md','P~3'],
                        ['structure/Q.md','Q'],
                        ['structure/R.md','R'],
                        ['structure/R~1.md','R~1'],
                        ['structure/R~2.md','R~2'],
                        ['structure/R~3.md','R~3'],
                        ['structure/S.md','S'],
                        ['structure/S~1.md','S~1'],
                        ['structure/S~2.md','S~2'],
                        ['structure/S~3.md','S~3'],
                        ['structure/S~4.md','S~4'],
                        ['structure/T.md','T'],
                        ['structure/T~1.md','T~1'],
                        ['structure/U.md','U'],
                        ['structure/V.md','V'],
                        ['structure/W.md','W'],
                        ['structure/W~1.md','W~1'],
                        ['structure/X.md','X'],
                        ['structure/Z.md','Z']
                    ]
                },
                {
                    title: 'Enums',
                    collapsable: true,
                    sidebarDepth: 4,
                    children: [
                        ['enums/A.md','A'],
                        ['enums/B.md','B'],
                        ['enums/C.md','C'],
                        ['enums/D.md','D'],
                        ['enums/D~1.md','D~1'],
                        ['enums/D~2.md','D~2'],
                        ['enums/D~3.md','D~3'],
                        ['enums/E.md','E'],
                        ['enums/F.md','F'],
                        ['enums/G.md','G'],
                        ['enums/H.md','H'],
                        ['enums/I.md','I'],
                        ['enums/J.md','J'],
                        ['enums/K.md','K'],
                        ['enums/L.md','L'],
                        ['enums/M.md','M'],
                        ['enums/N.md','N'],
                        ['enums/O.md','O'],
                        ['enums/P.md','P'],
                        ['enums/R.md','R'],
                        ['enums/S.md','S'],
                        ['enums/T.md','T'],
                        ['enums/U.md','U'],
                        ['enums/V.md','V'],
                        ['enums/W.md','W']
                    ]
                }
            ]
        }
    }
}