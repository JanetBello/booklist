import {
  form,
  nameDisplay,
  ageDisplay,
  nicknameDisplay,
  quoteDisplay,
  outputDisplay,
} from "./script.js";

let output;
class ApplicantInfo {
  constructor(name, age, nickname, quote) {
    this.name = name;
    this.age = age;
    this.nickname = nickname;
    this.quote = quote;
  }
}

function applicantData(e) {
  e.preventDefault();

  const name = nameDisplay.value,
    age = ageDisplay.value,
    nickname = nicknameDisplay.value,
    quote = quoteDisplay.value;

  const user = new ApplicantInfo(name, age, nickname, quote);

  output = `
    <table class ="output">
    <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Nickname</th>
          <th>Quote</th>
        </tr>
    <tr>
      <td>${user.name}</td>
      <td>${user.age}</td>
      <td>${user.nickname}</td>
      <td>${user.quote}</td>
      <tr>
    </table>
  `;

  outputDisplay.innerHTML += output;
  clearBtn.classList.remove("hidden");

  //   outputDisplay.style.display = "flex";
  //   outputDisplay.style.flexdirection = "column";

  nameDisplay.value = "";
  ageDisplay.value = "";
  nicknameDisplay.value = "";
  quoteDisplay.value = "";
}

const clearBtn = document.querySelector(".clearBtn");

clearBtn.addEventListener("click", () => {
  outputDisplay.innerHTML = "";
  clearBtn.classList.add("hidden");
});

export { applicantData };
