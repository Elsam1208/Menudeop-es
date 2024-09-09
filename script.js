function executeOption() {
    const selectedOption = document.getElementById('optionSelect').value;
    let resultText = '';

    switch (selectedOption) {
        case '1':
            // Opção 1: Mostrar Data e Hora Atual
            const now = new Date();
            resultText = `Data e Hora Atual: ${now.toLocaleString()}`;
            break;
        
        case '2':
            // Opção 2: Calcular a Soma de Dois Números
            const num1 = parseFloat(prompt('Digite o primeiro número:'));
            const num2 = parseFloat(prompt('Digite o segundo número:'));
            
            if (isNaN(num1) || isNaN(num2)) {
                resultText = 'Por favor, insira números válidos.';
            } else {
                const sum = num1 + num2;
                resultText = `A soma de ${num1} e ${num2} é: ${sum}`;
            }
            break;
        
        case '3':
            // Opção 3: Exibir Mensagem de Boas-vindas
            resultText = 'Bem-vindo ao Menu de Opções!';
            break;
        
        default:
            resultText = 'Opção inválida!';
            break;
    }

    document.getElementById('result').textContent = resultText;
}
