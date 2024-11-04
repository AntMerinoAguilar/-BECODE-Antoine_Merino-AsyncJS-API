const body = document.querySelector("body");

setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        setTimeout(() => {
                            body.style.backgroundColor = "purple";
                        }, 1000)
                        body.style.backgroundColor = "green";
                    }, 1000)
                    body.style.backgroundColor = "violet";
                }, 1000)
                body.style.backgroundColor = "cyan";
            }, 1000)
            body.style.backgroundColor = "red";
        }, 1000)
        body.style.backgroundColor = "yellow";
    }, 1000)
    body.style.backgroundColor = "blue";
}, 0o0)