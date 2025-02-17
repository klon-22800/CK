//вар 1 время в консоли отображалось каждые 5 секунд до 1 минуты после полной загрузки страницы

// function getCurrentDate(): void {
//     console.log(Date.now());
// }

// window.onload = () => {
//     const intervalId = setInterval(getCurrentDate, 5000); 

//     setTimeout(() => {
//         clearInterval(intervalId);
//         console.log("Прошла 1 минута");
//     }, 60000);
// };



function createLogger(message: string): () => void {
    return function logMessage(): void {
        console.log(message); 
    };
}

const helloLogger = createLogger("Произошло");
const closureLogger = createLogger("замыкание...");

helloLogger(); 
closureLogger(); 