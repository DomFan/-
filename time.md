## 	
	let dateReg = /^(\d{4})-(0\d{1}|1[0-2])-(0\d{1}|[12]\d{1}|3[01])$/,
     	endDate = this.data.endDate,
     	startDate = this.data.startDate

    if (startDate && dateReg.test(startDate)) {
      end = startDate.split('-').map(item => parseInt(item))
      if(start[2])
      end[2] += 3
      this.setData({
        endDate: endDate.join('-')
      })
    }
    console.log(this.data.endDate, this.data.startDate)
##
	let dateReg = /^(\d{4})-(0\d{1}|1[0-2])-(0\d{1}|[12]\d{1}|3[01])$/,
        endDate = this.data.endDate,
        startDate = this.data.startDate
        console.log(endDate, startDate)
      if (endDate && dateReg.test(endDate)) {
        startDate = endDate.split('-').map(item => parseInt(item))
        startDate[2] -= 3
        this.setData({
          startDate: startDate.join('-')
        })
      }

