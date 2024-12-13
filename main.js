function showDetails(operation) {
    let message;
  
    switch (operation) {
      case 'addition':
        message = 'Сложение — это процесс нахождения суммы двух или более чисел.';
        break;
      case 'subtraction':
        message = 'Вычитание — это операция, при которой из одного числа вычитается другое.';
        break;
      case 'multiplication':
        message = 'Умножение — это процесс сложения числа само на себя несколько раз.';
        break;
      case 'division':
        message = 'Деление — это операция, при которой одно число делится на другое.';
        break;
      default:
        message = 'Операция не найдена.';
    }
  
    alert(message);
  }  