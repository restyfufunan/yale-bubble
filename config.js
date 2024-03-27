var config = {
    style: 'mapbox://styles/restyf/cltnxv17h01ad01ra0zqvdtr5',
    accessToken: 'pk.eyJ1IjoicmVzdHlmIiwiYSI6ImNrdzJ0ZWZoZjF6NWcyb3BhM3k4emxmbDgifQ.j4QqIsVk6b024MA65selJA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'albers',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'A Branching Bubble',
    subtitle: 'Resty Fufunan',
    byline: 'CSTD 200',
    footer: 'Map polygons created with GeoJson. <br> Designed using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            hidden: false,
            title: 'Hello! My name is Resty.',
            image: 'photos/resty.jpg',
            description: 'I was born and raised in Chicago, where I spent a lot of time on college campuses. This is me, circa 2022, studying at the University of Chicago’s library. For the first time, I was taking classes with students from other states—and even other countries! ',
            location: {
                center: [-87.599, 41.789],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'intro-narrative',
            alignment: 'center',
            hidden: false,
            title: '',
           //image: 'blerp.png',
            description: 'I was excited to make new friends, and even more excited to show them my hometown. Yet, they were often reluctant to go past the confines of the campus. There was a clear divide between UChicago and not-UChicago, with the latter perceived as almost dangerous. There were just parts we would and wouldn’t go.',
            location: {
                center: [-87.599, 41.789],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chart-it-out',
            alignment: 'left',
            hidden: false,
            title: 'and if you chart it out. . .',
           //image: 'blerp.png',
            description: '',
            location: {
                center: [-87.59992924295251, 41.79026189053634],
                zoom: 13.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'kind_of_looks',
            alignment: 'left',
            hidden: false,
            title: '. . .it kind of looks like a bubble.',
           // image: './path/to/image/source.png',
            description: '',
            location: {
                center: [-87.59992924295251, 41.79026189053634],
                zoom: 13.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'uchicago-bubble-2bnon5',
                    opacity: 0.4,
                    duration: 750
                }
            ],
            onChapterExit: [
                {
                    layer: 'uchicago-bubble-2bnon5',
                    opacity: 0,
                    duration: 750
                }
            ]
        },
        {
            id: 'yale_bubble_initial',
            alignment: 'left',
            hidden: false,
            title: 'But what about Yale?',
            image: 'photos/tile.png',
            description: 'Since we are thinking about space, it makes sense to start with a map. This map style colors Yale buildings a darker shade than the surrounding areas. This largely captures where Yalies tend to go. Tracing the edges of these darker tiles, we start to form a coherent bubble. The boundaries make sense; these represent edges of housing, student-centered development, and the furthest extremes of Yale-owned property. ',
            location: {
                center: [-72.930, 41.314],
                zoom: 14.3,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "bubble-ded8qa",
                    opacity: .5,
                    duration: 750
                },
                {
                    layer: "do-go-0tfby1",
                    opacity: 0,
                    duration: 750
                }



            ],
            onChapterExit: []
        },
        {
            id: 'do_go',
            alignment: 'left',
            hidden: false,
            title: 'The bubble wraps around off-campus parts of New Haven where Yalies frequently go. . .',
            //image: './path/to/image/source.png',
            description: '',


            location: {
                center: [-72.930, 41.314],
                zoom: 14.3,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "do-go-0tfby1",
                    opacity: .5,
                    duration: 750
                }
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'brick_oven',
            alignment: 'right',
            hidden: false,
            title: 'A late-night destination like Brick Oven is a staple for any student.',
            //image: './path/to/image/source.png',
            description: 'Here, the bubble also wraps around the nearby Courtyard Hotel, popular among Yale families visiting town.',


            location: {
                center: [ -72.93371633488623, 41.312179800255365],
                zoom: 17,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "do-go-0tfby1",
                    opacity: .5,
                    duration: 1
                },
            ],
            onChapterExit: []
        },
        {
            id: 'olmo',
            alignment: 'right',
            hidden: false,
            title: 'And breakfast spots, like Olmo, are a crucial part of weekend brunches.',
            //image: './path/to/image/source.png',
            description: 'The bubble wraps around this popular student spot for take-out New York-style bagels, though the buildings surrounding it are law offices catering to the wider New Haven community.',


            location: {
                center: [-72.92138854588384, 41.31311082099753],
                zoom: 17.7,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "do-go-0tfby1",
                    opacity: .5,
                    duration: 0
                },
            ],
            onChapterExit: []
        },

        {
            id: 'lake-place',
            alignment: 'right',
            hidden: false,
            title: 'Decidedly Yale: the sports houses on Lake Place.',
            //image: './path/to/image/source.png',
            description: 'The single-family homes behind them? Not so much.',


            location: {
                center: [ -72.93000270983988, 41.315378515423234],
                zoom: 17,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "do-go-0tfby1",
                    opacity: 0,
                    duration: 300
                },
            ],
            onChapterExit: []
        },
        
        {
            id: 'dont_go',
            alignment: 'left',
            hidden: false,
            title: 'The bubble is also careful to demarcate the places Yalies avoid. . .',
           // image: './path/to/image/source.png',
            description: '',
            location: {
                center: [-72.92655522380187, 41.30780018076983],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "do-go-0tfby1",
                    opacity: 0,
                    duration: 300
                }
            ],
            onChapterExit: []
        },
        {
            id: 'green',
            alignment: 'right',
            hidden: false,
            title: '. . .like the New Haven Green.',
           // image: './path/to/image/source.png',
            description: 'Here, there is a noticeable disruption to an otherwise-contiguous bubble. Though students may cross the Green to reach other points, it is a transient place for Yalies.',
            location: {
                center: [ -72.92655522380187, 41.30780018076983],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: "bubble-ded8qa",
                opacity: 0.5,
                duration: 750
                }],
            onChapterExit: []
        },
        {
            id: 'but-wait',
            alignment: 'fully',
            hidden: false,
            title: 'But wait! Yalies do go outside of the bubble! Look at all these places they venture off to!',
           // image: './path/to/image/source.png',
            description: '',
            location: {
                center: [-72.930, 41.314],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: "bubble-ded8qa",
                opacity: 0,
                duration: 750
                },
            {
                layer: "branchlocs-9u9gfy",
                opacity: 0,
                duration: 750
                    }
        ],
            onChapterExit: []
        },

        {
            id: 'east-rock',
            alignment: 'left',
            hidden: false,
            title: '. . .like East Rock. . .',
           // image: './path/to/image/source.png',
            description: '(a staple hike for all first-years)',
            location: {
                center: [  -72.90712539667653, 41.328246808336665],
                zoom: 14.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                layer: "branchlocs-9u9gfy",
                opacity: 0.5,
                duration: 750
                    },


        ],
            onChapterExit: []
        },
        {
            id: 'wooster-square',
            alignment: 'left',
            hidden: false,
            title: '. . .or Wooster Square',
           // image: './path/to/image/source.png',
            description: '(filled with students getting New Haven apizza)',
            location: {
                center: [-72.91839444608839, 41.30407294627055],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: "bubble-ded8qa",
                opacity: 0,
                duration: 750
                },],
            onChapterExit: []
        },
        {
            id: 'maybe',
            alignment: 'left',
            hidden: false,
            title: 'Maybe students break the bubble more than we think. After all, these places are pretty far from campus—there’s no way a bubble can reach that far.',
           // image: './path/to/image/source.png',
            description: '',
            location: {
                center: [-72.930, 41.314],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "bubble-ded8qa",
                    opacity: 0.5,
                    duration: 750
                },
                {
                    layer: "branchlocs-9u9gfy",
                    opacity: 0.5,
                    duration: 750
                },
                {
                    layer: "newbranch-9y95lv",
                    opacity: 0,
                    duration: 750
                },
                
        ],
            onChapterExit: []
        },

        {
            id: 'bubble-branch',
            alignment: 'left',
            hidden: false,
            title: "But this bubble isn't a regular bubble.",
           // image: './path/to/image/source.png',
            description: 'It doesn’t expand in regular ways. It snakes through, growing like a branch and creating razor thin margins of Yale cutting through not-Yale. Though Yalies might seek to escape campus, they do so in pretty regular ways. They walk the same sidewalks, or take the same shuttles. As they do so, they create these thin branches of the Yale bubble. ',
            location: {
                center: [-72.930, 41.314],
                zoom: 13.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "bubble-ded8qa",
                    opacity: 0,
                    duration: 750
                },
                
                {
                    layer: "newbranch-9y95lv",
                    opacity: 0.4,
                    duration: 3000
                },
                {
                    layer: "scihill-2v9cxx",
                    opacity: 0,
                    duration: 750
                }
                ],
            onChapterExit: []
        },

        {
            id: 'historical-process',
            alignment: 'left',
            hidden: false,
            title: "This is a historical process.",
           // image: './path/to/image/source.png',
            description: 'A faraway point becomes interesting to Yalies, and it becomes subsumed in the bubble. The points that we now think are classically “Yale” were not considered such back then. But the bubble grows to accompany the demands of a growing student population (with an endowment growing at an even more rapid place).',
            location: {
                center: [-72.930, 41.314],
                zoom: 13.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "scihill-2v9cxx",
                    opacity: 0.4,
                    duration: 3000
                },
                
                {
                    layer: "bubble-ded8qa",
                    opacity: 0.5,
                    duration: 3000
                },
                
                {
                    layer: "newbranch-9y95lv",
                    opacity: 0,
                    duration: 750
                },
                {
                    layer: "branchlocs-9u9gfy",
                    opacity: 0,
                    duration: 750
                },
                
                ],
            onChapterExit: []
        },
        {
            id: 'bubble-final',
            alignment: 'left',
            hidden: false,
            title: "The Yale Bubble will continue expanding.",
           // image: './path/to/image/source.png',
            description: 'It will branch out as long as the University decides what things are interesting for them to include in the bubble.',
            location: {
                center: [-72.930, 41.314],
                zoom: 13.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "bubble-ded8qa",
                    opacity: 0,
                    duration: 3000
                },
                
                {
                    layer: "newbranch-9y95lv",
                    opacity: 0.4,
                    duration: 3000
                },
                {
                    layer: "scihill-2v9cxx",
                    opacity: 0,
                    duration: 750
                },
                {
                    layer: "uchicago-branch-47jphb",
                    opacity: 0,
                    duration: 750
                }
                ],
            onChapterExit: []
        },
        {
            id: 'back-to-uchi',
            alignment: 'left',
            hidden: false,
            title: "There are branching bubbles everywhere!",
           // image: './path/to/image/source.png',
            description: 'UChicago had branches too. These urban campuses are notorious for this; students stay largely within the confines of their campus, with a few interesting points that they frequent. How can we break out of this?            ',
            location: {
                center: [-87.59992924295251, 41.79026189053634],
                zoom: 13.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "uchicago-branch-47jphb",
                    opacity: 0.4,
                    duration: 3000
                },
                {
                    layer: "chicago-break-a07n6q",
                    opacity: 0,
                    duration: 500
                },
                ],
            onChapterExit: []
        },

        {
            id: 'breaking-branch',
            alignment: 'left',
            hidden: false,
            title: "The only way to break the bubble is to, quite literally, push your boundaries.",
           // image: './path/to/image/source.png',
            description: "It's scary to be in a new place. But you'll never know what you're missing out on if you just stay in your bubble. Eventually, some of my UChicago friends ended up following me around the city.",
            location: {
                center: [-87.7037020201555, 41.88196168086667],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [


                {
                    layer: "chicago-break-a07n6q",
                    opacity: 1,
                    duration: 3000
                },

                {
                    layer: "expanding-94c803",
                    opacity: 0,
                    duration: 500
                }
                ],
            onChapterExit: []
        },
        
        {
            id: 'finale',
            alignment: 'left',
            hidden: false,
            title: "And little by little, the bubble begins to swell. . .",
           // image: './path/to/image/source.png',
            description: "and burst!",
            location: {
                center: [-87.7037020201555, 41.88196168086667],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
                {
                    layer: "expanding-94c803",
                    opacity: 0.30,
                    duration: 3000
                },
                {
                    layer: "uchicago-branch-47jphb",
                    opacity: 0,
                    duration: 500
                },
            ],
            onChapterExit: []
        },
    ]
};
