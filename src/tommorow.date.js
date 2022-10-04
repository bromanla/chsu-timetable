const tommorowDate = new Date()
tommorowDate.setDate(tommorowDate.getDate() + 1)

const weekday = tommorowDate.toLocaleDateString('ru', { weekday: 'long' })
const string = tommorowDate.toLocaleDateString('ru')

module.exports =  {
  string,
  weekday: weekday[0].toUpperCase() + weekday.substring(1)
}
