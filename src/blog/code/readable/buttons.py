import tkinter as tk

class Application(tk.Frame):
	def __init__(self, master = None):
		super().__init__(master)
		self.master = master
		self.columns = 2
		self.offset = 2
		self.numbers = [
			{"value": 2, "name": "two", "digits": [[2]]},
			{"value": 3, "name": "three", "digits": [[3]]},
			{"value": 4, "name": "four", "digits": [[4]]},
			{"value": 5, "name": "five", "digits": [[5], [2, 3]]},
			{"value": 6, "name": "six", "digits": [[6]]},
			{"value": 7, "name": "seven", "digits": [[7], [3, 4]]},
			{"value": 8, "name": "eight", "digits": [[8], [2, 6], [3, 5]]},
			{"value": 9, "name": "nine", "digits": [[9], [2, 7], [3, 6], [4, 5], [2, 3, 4]]},
			{"value": 27, "name": "twentyseven", "digits": [[2, 4, 6, 7, 8], [3, 4, 5, 7, 8], [2, 3, 4, 5, 6, 7]]},
			{"value": 28, "name": "twentyeight", "digits": [[2, 5, 6, 7, 8], [3, 4, 6, 7, 8], [2, 3, 4, 5, 6, 8]]},
			{"value": 29, "name": "twentynine", "digits": [[3, 5, 6, 7, 8], [2, 3, 4, 5, 7, 8]]}
		]

	def draw_buttons(self):
		for number in self.numbers:
			number['button'] = tk.Button(root, text = str(number['value']), width = 4, padx = 10, pady = 10, command = lambda number = number: print(number['name']))
			number['button'].grid(row = (number['value'] - self.offset) // self.columns, column = (number['value'] - self.offset) % self.columns)

root = tk.Tk()
app = Application(master = root)
app.draw_buttons()
app.mainloop()
