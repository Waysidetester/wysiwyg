let famous = [
    {
        idName: "card1",
        title: "Standard Oil",
        name: "John D. Rockefeller",
        bio: "Founding and leading the Standard Oil Company, founding the University of Chicago, Rockefeller University, Central Philippine University, General Education Board, and Rockefeller Foundation",
        netWorth: "$400 billion (in 2017 dollars; inflation-adjusted)",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/John_D._Rockefeller_1885.jpg",
        lifespan: {
            birth: 1839,
            death: 1937 
            }
    },
    {
        idName: "card2",
        title: "Bethlehem Steel",
        name: "Charles M. Schwab",
        bio: "Charles Michael Schwab was an American steel magnate. Under his leadership, Bethlehem Steel became the second largest steel maker in the United States, and one of the most important heavy manufacturers in the world.",
        netWorth: "$6.2 Billion (in 2017 dollars; inflation-adjusted)",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Charles_M._Schwab_cph.3b33668.jpg",
        lifespan: {
            birth: 1862,
            death: 1939 
        }
    },
    {
        idName: "card3",
        title: " New York Central Railroad",
        name: "Cornelius Vanderbilt",
        bio: "Cornelius Vanderbilt (May 27, 1794 – January 4, 1877) was an American business magnate and philanthropist who built his wealth in railroads and shipping. Born poor and having only a mediocre education, Vanderbilt used perseverance, intelligence and luck to work his way into leadership positions in the inland water trade and invest in the rapidly growing railroad industry. Nicknamed \"The Commodore\", he is known for owning the New York Central Railroad.",
        netWorth: "$215 billion (2016 dollars; inflation-adjusted)",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Cornelius_Vanderbilt_Daguerrotype2.jpg",
        lifespan: {
            birth: 1794,
            death: 1877 
        }
    },
    {
        idName: "card4",
        title: "First Transcontinental Railroad",
        name: "Mark Hopkins Jr.",
        bio: "he founded the Central Pacific Railroad. Sometimes called \"Uncle Mark\", he was the eldest of the four partners and was well known for his thriftiness (it was said that he knew how to \"squeeze 106 cents out of every dollar\", a reputation that gained him the post of company treasurer. Noted American historian Hubert Howe Bancroft quotes Collis Huntington as saying, \"I never thought anything finished until Hopkins looked at it\". Bancroft described Hopkins as the \"balance-wheel of the Associates and one of the truest and best men that ever lived.\"",
        netWorth: "$1 billion (2016 dollars; inflation-adjusted)",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Mark_Hopkins_1813-1878.jpg",
        lifespan: {
            birth: 1813,
            death: 1878
        }
    },
    {
        idName: "card5",
        title: "Stockbroker",
        name: "James Fisk",
        bio: "American stockbroker and corporate executive who has been referred to as one of the \"robber barons\" of the Gilded Age. Though Fisk was admired by the working class of New York and the Erie Railroad, he achieved much ill-fame for his role in Black Friday in 1869, where he and his partner Jay Gould befriended the unsuspecting President Ulysses S. Grant in an attempt to use the President's good name in a scheme to corner the gold market in New York City. Several years later Fisk was murdered by a disgruntled business associate.",
        netWorth: "N/A",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Jubilee-jim-fisk.jpg",
        lifespan: {
            birth: 1835,
            death: 1872 
        }
    },
    {
        idName: "card6",
        title: "Stock market speculation and manipulation",
        name: "Daniel Drew",
        bio: "American businessman, steamship and railroad developer, and financier. Summarizing his life, Henry Clews wrote: \"Of all the great operators of Wall Street ... Daniel Drew furnishes the most remarkable instance of immense and long-continued success, followed by utter failure and hopeless bankruptcy\".",
        netWorth: "$200 million (in 2017 dollars; inflation-adjusted)",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
            birth: 1747,
            death: 1797
        }
    },
    {
        idName: "card7",
        title: "Financier",
        name: "Jay Cooke",
        bio: "American financier who helped finance the Union war effort during the American Civil War and the postwar development of railroads in the northwestern United States. He is generally acknowledged as the first major investment banker in the United States and creator of the first wire house firm.",
        netWorth: "590 million (in 2017 dollars; inflation-adjusted)",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/19/JayCooke-BW.JPG",
        lifespan: {
            birth: 1747,
            death: 1797
        }
    },
    {
        idName: "card8",
        title: "Carnegie Steel Company",
        name: "Andrew Carnegie",
        bio: "Carnegie led the expansion of the American steel industry in the late 19th century and is often identified as one of the richest people (and richest Americans). He became a leading philanthropist in the United States and in the British Empire. During the last 18 years of his life, he gave away about $350 million to charities, foundations, and universities—almost 90 percent of his fortune. His 1889 article proclaiming \"The Gospel of Wealth\" called on the rich to use their wealth to improve society, and stimulated a wave of philanthropy.",
        netWorth: "372 billion (in 2016 dollars; inflation-adjusted)",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Andrew_Carnegie%2C_three-quarter_length_portrait%2C_seated%2C_facing_slightly_left%2C_1913.jpg",
        lifespan: {
            birth: 1835,
            death: 1919 
        }
    }
];

const inputBox = document.getElementById('formEntry');
const submit = document.getElementById('submitForm');


const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML += stringToPrint;
}

const eventBubbler = (cardId) => {
    document.getElementById(cardId).addEventListener('click', (e) => {
        let target = e.currentTarget
        console.log(target);
        let oldClass = document.getElementsByClassName('bordered');
        if (oldClass.length > 0) {
            oldClass[0].classList.remove('bordered');
        }
        e.currentTarget.classList.add('bordered');
        inputBox.focus();
        inputBox.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) {
                inputBox.blur();
                inputBox.value = '';
            } else {
                let bioTarget = document.getElementsByClassName('bordered');
                bioTarget[0].childNodes[7].innerHTML = inputBox.value;
            }
        });
    });
}

const famousBuilder = () => {
    let newstring = ``;
    for (i = 0; i < famous.length; i++) {
        let currentId = ''
        newstring += `<div class="card" id=${famous[i].idName}>`;
        newstring += `  <header>${famous[i].name} ${famous[i].title}</header>`;
        newstring += `  <img src="${famous[i].image}" alt="image of${famous[i].name}"/>`
        newstring += `  <strong>${famous[i].netWorth}</strong>`;
        newstring += `  <p class="biography">${famous[i].bio}</p>`;
        newstring += `  <footer><strong>Time alive:</strong> ${famous[i].lifespan.birth} - ${famous[i].lifespan.death}</footer>`;
        newstring += `</div>`
        printToDom('cardsHere', newstring);
        newstring =``;
        // eventBubbler(famous[i].idName);
    }
    eventBubbler(famous[0].idName)
    eventBubbler(famous[1].idName)
    eventBubbler(famous[2].idName)
    eventBubbler(famous[3].idName)
    eventBubbler(famous[4].idName)
    eventBubbler(famous[5].idName)
    eventBubbler(famous[6].idName)
    eventBubbler(famous[7].idName)
};

famousBuilder();