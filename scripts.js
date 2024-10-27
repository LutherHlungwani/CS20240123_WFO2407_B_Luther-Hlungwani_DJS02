const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  try {
    if (!dividend || !divider) {
      result.innerText = "Division not performed. Both values are required in inputs. Try again";
      return;
    }
    const num1 = parseFloat(dividend);
    const num2 = parseFloat(divider);

    if (isNaN(num1) || isNaN(num2)) {
      document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page.</h1>";
      throw new Error("Critical error: Non-numeric input provided.");
    }

    if (num2 === 0) {
      result.innerText = "Division not performed. Invalid number provided. Try again";
      console.error("Division by zero error", new Error().stack);
      return;
  }

  result.innerText = Math.floor(num1/num2);  
  } catch (error) {
    console.error(error.stack);
  }

  
});

