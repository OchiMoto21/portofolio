export const projects:
    { 
        title: string, 
        description: string,
        image: string,
        link: 
            {
                media: string,
                url: string
            }[],
        technologies: string[]
    
    }[] = [
        {
            title: 'Portfolio',
            description: 'The portfolio you\'re seeing right now.',
            image: "/projects/portfolio.png",
            link : [{
                media : "Github",
                url: "https://github.com/OchiMoto21/portofolio"
            }],
            technologies: [
                "Next.js", "React","CSS"
            ]
        },
        {
            title: "Thesis - Design and Implementation of 2X2 MIMO Generalized Frequency Division Multiplexing System (GFDM) Receiver Using Software Defined Radio (SDR)",
            description: 'Generalized Frequecy Division Multiplexing (GFDM) is a 5G waveform candidate. My partner and I implemented signal processing of GFDM waveform on a 2x2 MIMO transceiver system by utilizing SDR, antennas, anechoic chamber and MATLAB software.',
            image: "/projects/thesis.png",
            link : [{
                media : "Video",
                url: "/VIDEO DEMO TA - KELOMPOK 4.mp4"
            },
            ],
            technologies: [
                "MATLAB"
            ]
        },
        {
            title: 'Handwritten Optical Character Recognition (OCR) on Sundanese Number Script using Residual Neural Networks (ResNet)',
            description: 'Web app for recognizing Sundanese number script using a deep neural network called ResNet. Dataset for training was collected from digital handwriting, pre-preprocessed image taken from camera, and augmented image.',
            image: "/projects/Pengenalan-Aksara-Sunda.png",
            link : [{
                media : "Github",
                url: "https://github.com/OchiMoto21/OCR-aksara-sunda"
            },{
                media : "Python Notebook",
                url: "https://github.com/OchiMoto21/OCR-aksara-sunda/blob/main/OCR_Aksara_Sunda_pytorch.ipynb"
            },{
                media: "Paper",
                url: "/Handwritten-Optical-Character-Recognition-OCR-on-Sundanese-Number-Script-using-Residual-Neural-Networks-ResNet.pdf"
            }],
            technologies: [
                "Python", "Flask", "Pytorch", "Shell Scripting"
            ]
        },
        {
            title: 'Guitar Tuner',
            description: 'Web app for guitar tuning with autocorrelation algorithm for detecting audio signals frequency.',
            image: "/projects/Guitar-Tuner.png",
            link : [{
                media : "Github",
                url: "https://github.com/OchiMoto21/guitar-tuner" 
            },{
                media: "Website",
                url: "https://underdeveloper.github.io/guitar-tuner-serverless/"
            }
            
            ],
            technologies: [
                "Javascript", "HTML", "CSS"
            ]
        },
        {
            title: 'Itsy - Traveling Made Easy',
            description: "UX design of a mobile app that builds an itinerary with the help of artificial intelligence in Indonesia so user can make an itinerary fast and easy.",
            image: "/projects/Itsy.png",
            link: [{
                media: "Proposal",
                url: "/Proposal.pdf"
            },{
                media: "Figma Prototype",
                url: "https://www.figma.com/proto/hUv9txoybbgrCTMgHZzyDR/Design-%26-Prototype?page-id=228%3A7337&type=design&node-id=228-7622&viewport=1080%2C32%2C0.59&t=NKASuq26Lejbhw11-1&scaling=scale-down&mode=design"
            },{
                media: "Poster",
                url: "/Poster.png"

            }],
            technologies: [
                "Figma"
            ]
        },
        {
            title: 'Chess Bot',
            description: 'Private Discord bot for playing chess and others.',
            image: "/projects/Discord-Chess-Bot.png",
            link : [{
                media : "Github",
                url: "https://github.com/OchiMoto21/discord-ochi-chess-bot"
            }],
            technologies: [
                "Node.js", "MongoDB", "Discord API", "GCP", "Heroku"
            ]
        }
    ]