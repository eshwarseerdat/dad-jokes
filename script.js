const jokeSect = document.querySelector("#jokes");
const jokeBtn = document.querySelector("#joke-btn");

const url = `https://icanhazdadjoke.com/`;
const header = { headers: { accept: "application/json" } };

const getJoke = async () => {
  try {
    const resp = await fetch(url, header);

    if (!resp.ok) throw new Error();

    const respJson = await resp.json();

    jokeSect.innerText = respJson.joke;
  } catch (e) {
    console.log(e);
  }
};

jokeBtn.addEventListener("click", getJoke);

getJoke();
