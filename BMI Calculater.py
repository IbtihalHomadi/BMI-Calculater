#BMI Program
#function to receive height and weight from user ,Calculate and return  BMI

def calculate_bmi ():
    height = float(input("Enter your height in m: "))
    weight = float(input("Enter your weight in km: "))

    bmi = weight / (height ** 2)
    print(f"Your BMI is : {bmi}")
    return bmi

# Function to interpret values of BMI
def interpret_bmi(bmi):
    if bmi <18.5:
        print("Underweight")
    elif 18.5  <= bmi < 25:
        print("Normal weight")
    elif 25 <= bmi < 30 :
        print("Overweight")
    else :
        print("Obese")


if __name__ == "__main__":
    bmi = calculate_bmi()
    interpret_bmi(bmi)
