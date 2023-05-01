  const businessRevenues = {
	lsc: 100000,
	cs: 35000,
	store: 50000,
	ws: 40000,
	gs: 40000,
	na: 15000,
	ba: 15000,
};

function calcRevenuePerShare(numShares, totalRevenue) {
	const revenuePerShare = totalRevenue / numShares;
	return revenuePerShare;
}

function calcDailyIncome(numShares, revenuePerShare) {
	const dailyIncome = numShares * revenuePerShare;
	return dailyIncome;
}

const isPrime = (num) => {
	if (num <= 1) return false;
	if (num <= 3) return true;
	if (num % 2 === 0 || num % 3 === 0) return false;
	for (let i = 5; i * i <= num; i += 6) {
	  if (num % i === 0 || num % (i + 2) === 0) {
		return false;
	  }
	}
	return true;
  };

module.exports = {
	name: 'calc',
	description: 'Calculate daily income for a business',
	usage: '!calc [business name] [total revenue]',
	async execute(message, args) {
		const businessName = args[0];
		const totalRevenue = parseFloat(args[1]);

		if (!businessRevenues[businessName]) {
			return await message.channel.send(`Nu ai introdus numele business-ului. Foloseste comanda \`!bizuri\` pentru a vedea numele business-urilor.`);
		}

		const numShares = businessRevenues[businessName];
		const revenuePerShare = calcRevenuePerShare(numShares, totalRevenue);

		const numSharesFilter = (msg) => !isNaN(msg.content) && msg.author.id === message.author.id;
		const numSharesCollector = message.channel.createMessageCollector(numSharesFilter, {
			time: 60000,
			max: 1,
		});

		await message.channel.send(
			`Profitul pentru un share pentru **${businessName}** este **$${revenuePerShare.toFixed(2)}**. Va rog sa scrieti cate share-uri aveti.`,
		);

		numSharesCollector.on('collect', async (msg) => {
			const numSharesOwned = parseInt(msg.content);
			const dailyIncome = calcDailyIncome(numSharesOwned, revenuePerShare);

			let primeDailyIncome = Math.floor(dailyIncome);
			while (!isPrime(primeDailyIncome)) {
  			primeDailyIncome--;
			}

			await message.channel.send(
				`Din business-ul **${businessName}** detinand numarul de share-uri **${numSharesOwned}** profitul va fi de **$${primeDailyIncome}**.`,
			);
		});

		numSharesCollector.on('end', (collected) => {
			if (collected.size === 0) {
				message.channel.send('A trecut timpul. Te rog sa trimiti raspunsul timp de un minut.');
			}
		});
	},

};

