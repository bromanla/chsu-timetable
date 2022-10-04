const getMessage = (timetable, tommorowDate) => {
  const header = `${tommorowDate.weekday}, ${tommorowDate.string}`

  if (timetable.length === 0)
      return `${header}\n\nЗанятия не найдены`

  const body = timetable.map((lesson) => {
    const tmp = []

    tmp.push(`${lesson.startTime} - ${lesson.endTime}`)
    tmp.push(`${lesson.abbrlessontype} ${lesson.discipline.title}`)

    lesson.lecturers.forEach((lecturer) => tmp.push(lecturer.fio))

    if (lesson.online)
      tmp.push('Онлайн')
    else
      tmp.push(`${lesson.build.title} ${lesson.auditory.title}`)

    return tmp.join('\n')
  })

  return [ header, ...body ].join('\n\n')
}

module.exports = getMessage
