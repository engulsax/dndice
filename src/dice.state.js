const diceState = {
	amountOfDice: 1,
	selectedDie: 2,
	dieSum: 0,
	dieArray: [],
	dices: [
		{
			text: 'd2',
			pos: 'first',
			dieNum: 2,
		},
		{
			text: 'd4',
			pos: '',
			dieNum: 4,
		},
		{
			text: 'd6',
			pos: '',
			dieNum: 6,
		},
		{
			text: 'd8',
			pos: '',
			dieNum: 8,
		},
		{
			text: 'd10',
			pos: '',
			dieNum: 10,
		},
		{
			text: 'd12',
			pos: '',
			dieNum: 12,
		},
		{
			text: 'd20',
			pos: '',
			dieNum: 20,
		},
		{
			text: 'd100',
			pos: 'last',
			dieNum: 100,
		}
	]
}

export function increaseDice() {
	diceState.amountOfDice += 1;
}

export function decreaseDice() {
	if(diceState.amountOfDice === 1) return
	diceState.amountOfDice -= 1;
}

export function rollDice() {
	// randomly generated N = amountOfDice length array 0 <= A[N] <= selectedDie
	diceState.dieArray = Array.from({length: diceState.amountOfDice}, () => Math.ceil(Math.random() * diceState.dices[diceState.selectedDie].dieNum));
	diceState.dieSum = 0;
	diceState.dieArray.forEach((die) => {diceState.dieSum += die})

	this.diceTextId = `td${diceState.dices[diceState.selectedDie].dieNum}`;
    const elms = document.querySelectorAll(`[data-name=${this.diceTextId}]`);

    let i = 0;
    elms.forEach((el) => {
      el.textContent = diceState.dieArray[i];
      i+=1;
    })
}

export function resetDie(){
	diceState.dieSum = 0;
	diceState.amountOfDice = 1;	
	diceState.dieArray = [];
}

export default diceState;
