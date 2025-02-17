//вар 1 время в консоли отображалось каждые 5 секунд до 1 минуты после полной загрузки страницы
function getCurrentDate() {
    console.log(Date.now());
}
window.onload = function () {
    var intervalId = setInterval(getCurrentDate, 5000);
    setTimeout(function () {
        clearInterval(intervalId);
        console.log("Прошла 1 минута");
    }, 60000);
};
