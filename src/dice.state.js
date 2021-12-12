const diceState = {
	amountOfDice: 1,
	selectedDie: 2,
	dieSum: 0,
	dieArray: [],
	dices: [
		{
			text: 'd%',
			src: 'dp',
			dieNum: 'p',
		},
		{
			text: 'd2',
			dieNum: 2,
		},
		{
			text: 'd4',
			dieNum: 4,
		},
		{
			text: 'd6',
			dieNum: 6,
		},
		{
			text: 'd8',
			dieNum: 8,
		},
		{
			text: 'd10',
			dieNum: 10,
		},
		{
			text: 'd12',
			dieNum: 12,
		},
		{
			text: 'd20',
			dieNum: 20,
		},
		// {
		// 	text: 'd100',
		// 	dieNum: 100,
		// }
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
	if(diceState.dices[diceState.selectedDie].dieNum === 'p') {
		diceState.dieArray = Array.from({length: diceState.amountOfDice}, () => Math.ceil(Math.random() * 100));
		console.log(diceState.dieArray)
	} else {
		diceState.dieArray = Array.from({length: diceState.amountOfDice}, () => Math.ceil(Math.random() * diceState.dices[diceState.selectedDie].dieNum));
	}
	// randomly generated N = amountOfDice length array 0 <= A[N] <= selectedDie
	diceState.dieSum = '???';

	setTimeout(() => {
		diceState.dieSum = 0;
		diceState.dieArray.forEach((die) => {diceState.dieSum += die})
	}, 1000)

	this.diceTextId = `td${diceState.dices[diceState.selectedDie].dieNum}`;
	const elmsDie = document.querySelectorAll('[data-name=diesvg]');

	elmsDie.forEach((el) => {
		el.classList.add('rolling-die');
		i+=1;
		setTimeout(() => {
			el.classList.remove('rolling-die');
		}, 1000)
	})

    const elmsTxt = document.querySelectorAll(`[data-name=${this.diceTextId}]`);

    let i = 0;
    elmsTxt.forEach((el) => {
		el.classList.add('rolling-die');
		el.textContent = 'N'
		let a = i;
		setTimeout(() => {
			el.textContent = diceState.dieArray[a];
			el.classList.remove('rolling-die');
		}, 1000)
      i+=1;
    })
}

export function resetDie(){
	diceState.dieSum = 0;
	diceState.amountOfDice = 1;	
	diceState.dieArray = [];
}

export default diceState;
