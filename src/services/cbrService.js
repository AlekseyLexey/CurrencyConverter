const getValutes = async () => {
	const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
 
	if (!res.ok) {
	  throw new Error(`Could not fetch ${url}, status: ${res.status}`)
	}
 
  return await res.json();
}

export default getValutes;