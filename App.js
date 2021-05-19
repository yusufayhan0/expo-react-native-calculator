import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get("window");

export default function App() {
  const [number, setNumber] = useState("")
  const [isNumber, setIsNumber] = useState()
  const [fonsizeValue, setfonsizeValue] = useState(80)
  useEffect(() => {
    if (number.length > 9) {
      setfonsizeValue(45)
    }
    else if (number.length > 6) {
      setfonsizeValue(60)
    }
    else {
      setfonsizeValue(80)
    }
    console.log("number : ", number)
    //isNaN() sayı gelirse false döner
  }, [number])

  useEffect(() => {
    setIsNumber(false)
  }, [])

  //console.log("aaaaa:")

  const changeNumber = (newNumb) => {
    let length = number.length;
    let endNumber = number[number.length - 1]
    let twoEndNumber = number[number.length - 2]
    if (number.length < 55) {
      if (isNumber && !isNaN(newNumb)) {
        setNumber("" + newNumb)
        setIsNumber(false)
        return
      }
      if (number === "0") {
        setNumber("" + newNumb)
      }
      else if ((number === "" && isNaN(newNumb)) || (number === "-" && isNaN(newNumb))) {
        if (newNumb === "-") {
          setNumber("-")
        }
        else {
          setNumber("")
        }
      }
      else {
        if (isNaN(endNumber) && isNaN(newNumb)) {
          if (newNumb === ".") {
            setNumber(value => "" + value)
          }
          else if (isNaN(twoEndNumber) && isNaN(endNumber) && isNaN(newNumb)) {
            if (newNumb === "-") {
              setNumber(value => "" + value.slice(0, length - 1) + newNumb)
            }
            else {
              setNumber(value => "" + value.slice(0, length - 2) + newNumb)
            }
          }
          else {
            if (endNumber !== "-" && newNumb === "-") {
              if (endNumber !== "+") {
                setNumber(value => "" + value + newNumb)
              }
              else {
                setNumber(value => "" + value.slice(0, length - 1) + newNumb)
              }
            }
            else {
              setNumber(value => "" + value.slice(0, length - 1) + newNumb)
            }
          }
        }
        else {
          if (newNumb === ".") {
            let i = length - 1
            let isBla = false
            while (i >= 0) {
              if (isNaN(number[i])) {
                if (number[i] === ".") {
                  isBla = true
                }
                break
              }
              i--
            }
            if (!isBla) {
              setNumber(value => "" + value + newNumb)
            }
          }
          else {
            setNumber(value => "" + value + newNumb)
          }
        }
      }
    }
    
    setIsNumber(false)
  }


  const sonucFilter = (number) => {
    if (number === "" || number === "0") {
      return "0"
    }
    else {
      if (isNaN(number[number.length - 1]) && number[number.length - 1] !== "%") {
        return number.slice(0, number.length - 1)
      }
      else {
        if(number[number.length - 1] !== "%"){
          return number.replace(/%/g, "*1/100*")
        }
        else{
          return number.replace(/%/g, "*1/100")
        }
      }
    }
  }

  const del = () => {
    setNumber(value => "" + value.slice(0, value.length - 1))
  }

  const sonucGoster = () => {
    
    setIsNumber(true)
    try {
      setNumber(
        String(eval(
          sonucFilter(number)
        ))
      )
    } catch (error) {
      setNumber("Error")
      setIsNumber(true)
    }
    
  }

  const sifirla = () => {
    setNumber("")
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />
      <View style={styles.inpusView}>
        <Text style={{ fontSize: fonsizeValue, color: "white", paddingRight: 40, }}>{number}</Text>
      </View>
      <View styles={styles.buttonsViewContainer}>
        <View style={styles.buttonsView}>
          <TouchableOpacity onPress={() => sifirla()}><View style={styles.buttonsGray}><Text style={styles.buttonText}>AC</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => del()}><View style={styles.buttonsGray}><Text style={styles.buttonText}>Del</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => changeNumber("%")}><View style={styles.buttonsGray}><Text style={styles.buttonText}>%</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => changeNumber("/")}><View style={[styles.buttonsGray, { backgroundColor: "orange" }]}><Text style={[styles.buttonText, { color: "white" }]}>÷</Text></View></TouchableOpacity>
        </View>
        <View style={styles.buttonsView}>
          <TouchableOpacity onPress={() => changeNumber(7)}><View style={styles.buttonsBlack}><Text style={styles.buttonTextWhite} >7</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => changeNumber(8)}><View style={styles.buttonsBlack}><Text style={styles.buttonTextWhite} >8</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => changeNumber(9)}><View style={styles.buttonsBlack}><Text style={styles.buttonTextWhite} >9</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => changeNumber("*")}><View style={[styles.buttonsBlack, { backgroundColor: "orange" }]}><Text style={[styles.buttonText, { color: "white" }]}>x</Text></View></TouchableOpacity>

        </View>
        <View style={styles.buttonsView}>
          <TouchableOpacity onPress={() => changeNumber(4)}><View style={styles.buttonsBlack}><Text style={styles.buttonTextWhite} >4</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => changeNumber(5)}><View style={styles.buttonsBlack}><Text style={styles.buttonTextWhite} >5</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => changeNumber(6)}><View style={styles.buttonsBlack}><Text style={styles.buttonTextWhite} >6</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => changeNumber("-")}><View style={[styles.buttonsBlack, { backgroundColor: "orange" }]}><Text style={[styles.buttonText, { color: "white" }]}>-</Text></View></TouchableOpacity>

        </View>
        <View style={styles.buttonsView}>
          <TouchableOpacity onPress={() => changeNumber(1)}><View style={styles.buttonsBlack}><Text style={styles.buttonTextWhite} >1</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => changeNumber(2)}><View style={styles.buttonsBlack}><Text style={styles.buttonTextWhite} >2</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => changeNumber(3)}><View style={styles.buttonsBlack}><Text style={styles.buttonTextWhite} >3</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => changeNumber("+")}><View style={[styles.buttonsBlack, { backgroundColor: "orange" }]}><Text style={[styles.buttonText, { color: "white" }]}>+</Text></View></TouchableOpacity>

        </View>
        <View style={styles.buttonsView}>
          <TouchableOpacity onPress={() => changeNumber(0)}><View style={[styles.buttonsBlack, { width: (width / 4 - 20) * 2, alignItems: "flex-start", paddingLeft: (width / 4 - 25) / 2 }]}><Text style={styles.buttonTextWhite}>0</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => changeNumber(".")}><View style={styles.buttonsBlack}><Text style={styles.buttonTextWhite}>.</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => sonucGoster()}><View style={[styles.buttonsBlack, { backgroundColor: "orange" }]}><Text style={[styles.buttonText, { color: "white" }]}>=</Text></View></TouchableOpacity>
        </View>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40,
  },
  inpusView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  buttonsViewContainer: {
    padding: 40,
    borderWidth: 1,
    borderColor: "white",
  },
  buttonsView: {
    paddingHorizontal: 25,
    padding: 5,
    flexDirection: "row",
    width: width,
    justifyContent: "space-between"//komple o bloğa yayar
  },
  buttonsGray: {
    borderRadius: (width / 4 - 25) / 2,
    width: width / 4 - 25,
    height: width / 4 - 25,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonsBlack: {
    borderRadius: (width / 4 - 25) / 2,
    width: width / 4 - 25,
    height: width / 4 - 25,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold"
  },
  buttonTextWhite: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold"
  }
});
