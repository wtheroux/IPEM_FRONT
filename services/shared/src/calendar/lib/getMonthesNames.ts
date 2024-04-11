import { createDate } from './createDate'

export const getMonthesNames = () => {
  const monthesNames: {
    month: ReturnType<typeof createDate>['month']
    monthIndex: ReturnType<typeof createDate>['monthIndex']
  }[] = Array.from({ length: 12 })

  const d = new Date()

  monthesNames.forEach((_, i) => {
    const { month, monthIndex } = createDate({
      date: new Date(d.getFullYear(), d.getMonth() + i, 1)
    })

    monthesNames[monthIndex] = { month, monthIndex }
  })

  return monthesNames
}
