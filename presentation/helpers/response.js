export const completedStatus = data => ({ status: 'Completed', code: '1', response: data })

export const errorStatus = error => ({ status: 'Error', code: '2', error: error })