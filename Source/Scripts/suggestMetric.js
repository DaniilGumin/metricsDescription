function listenToSubmit() {
    document.addEventListener("submit", (event) => {
        event.preventDefault()
        const metricName = document.getElementById("metric-name").value
        const metricDescription = document.getElementById("metric-description").value
        const contact = document.getElementById("contact").value

        if (metricName.length === 0 || metricDescription.length === 0 || contact.length === 0) {
            alert("Все поля должны быть заполнены.")
            return
        }

        if (/<\/?[a-z][\s\S]*>/i.test(metricName) || /<\/?[a-z][\s\S]*>/i.test(metricDescription) || /<\/?[a-z][\s\S]*>/i.test(contact)) {
            alert("Вы плохой человек и пытались ввести строку содержащую HTML.")
            return
        }

        document.getElementById("metric-name").value = "";
        document.getElementById("metric-description").value = "";
        document.getElementById("contact").value = "";

        const hash = new Date().getTime() + metricName
        const suggestObject = {"name": metricName, "description": metricDescription, "user-contact": contact}
        localStorage.setItem(hash, JSON.stringify(suggestObject))
        renderSuggest(suggestObject)
    })
}

function displayMetrics() {
    const keys = Object.keys(localStorage)
    let count_of_suggest = keys.length

    while (count_of_suggest--) {
        renderSuggest(JSON.parse(localStorage.getItem(keys[count_of_suggest])))
    }
}

function renderSuggest(suggestObject) {
    const rowRender = `
      <tr class="suggest-metric-row">
          <td class="metric-suggest-field-with-right-line">
              ${suggestObject["name"].toString()}
          </td>
          <td class="metric-suggest-field-with-right-line">
              <pre>${suggestObject["description"].toString()}</pre>
          </td>
          <td class="metric-suggest-field">
              ${suggestObject["user-contact"].toString()}
          </td>
      </tr>
    `;
    document.querySelector(".suggest-metric").insertAdjacentHTML("beforeend", rowRender);
}

(function () {
    document.addEventListener("DOMContentLoaded", () => {
        listenToSubmit()
        displayMetrics()
    })
})();