const body = document.querySelector("body");

function generateBG(color, delay) {
    return new Promise((resolve, reject) => {
        const randomNum = Math.random();
        console.log(randomNum);
        if (randomNum > 0.5) {
            reject();
        } else {
            setTimeout(() => {
                body.style.backgroundColor = color;
                console.log(`le body a un background color ${color}`);
                resolve();
            }, delay);
        }
    });
}

const myFunc = async () => {
    try {
        await generateBG("blue", 2000);
        await generateBG("yellow", 2000);
        await generateBG("red", 2000);
        await generateBG("cyan", 2000);
        await generateBG("violet", 2000);
        await generateBG("green", 2000);
        await generateBG("purple", 2000);
    } catch (error) {
        console.log("oh no! an error", error);
    }
};

myFunc();