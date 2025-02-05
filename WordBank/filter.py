
def filter_words():
    five_words = open("words_five.txt", "w", encoding="utf-8")
    six_words = open("words_six.txt", "w", encoding="utf-8")
    seven_words = open("words_seven.txt", "w", encoding="utf-8")

    with open("todas_palabras.txt", encoding="utf-8") as words:
        for line in words:
            if(len(line) == 6):
                five_words.write(line)
            elif(len(line) == 7):
                six_words.write(line)
            elif(len(line) == 8):
                seven_words.write(line)
    five_words.close()
    six_words.close()
    seven_words.close()


def main():
    filter_words()

if __name__=="__main__":
    main()