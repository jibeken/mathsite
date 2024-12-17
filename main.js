function showDetails(operation) {
    let message;
  
    switch (operation) {
      case 'inequalities7':
        message = "-3 < 5 - 2x < 9\n" +
                "-8 < -2x < 4\n" +
                "-4 < -x < 2\n" +
                "Знаки меняются при умножении на -1:\n" +
                "4 > x > -2\n" +
                "-2 < x < 4\n" +
                "Ответ: (2;4).";
        break;
        case 'equivalentInequalities7':
            message = "Решение:\n1. 2x + 3 > 5\n   Переносим 3: 2x > 2\n   Делим на 2: x > 1";
            break;
        case 'quadraticEquations8':
            message = "Решение квадратного уравнения:\n1. x² - 5x + 6 = 0\n   Дискриминант: D = (-5)² - 4·1·6 = 25 - 24 = 1\n   Корни: x₁ = 3, x₂ = 2";
            break;
          case 'exponents8':
            message = "Пример:\n1. 2³ · 2² = 2^(3+2) = 2⁵ = 32";
            break;
          case 'systemsEquations9':
            message = "Решение системы:\n1. x + y = 5, y = 2x\n   Подставляем: x + 2x = 5\n   3x = 5 → x = 5/3, y = 10/3";
            break;
          case 'functionsGraphs9':
            message = "Построение графика:\n1. y = 2x + 1\n   Точки: (0, 1), (1, 3), (-1, -1)\n   Соединяем точки для прямой линии.";
            break;
          default:
            message = "Операция не найдена";
    }
  
    alert(message);
  }  