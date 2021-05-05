import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get("window");

export default function App() {
  const [number, setNumber] = useState("")
  const [newNumber, setNewNumber] = useState(true)
  const [tempPercent, setTempPercent] = useState("")
  const [tempNegative, setTempNegative] = useState("")

  useEffect(() => {
    if (tempPercent.length !== 0)
      console.log("iiiiiiiiiiiiiiii", tempPercent)
  }, [tempPercent])


  useEffect(() => {
    if (number.length !== 0)
      console.log("number : ", number)
  }, [number])

  const changeNumber = (numb) => {
    if (number !== "") {
      if (newNumber) {//eşittire basılmamış
        if (isNaN(numb) && isNaN(number[number.length - 1])) {//gelen değer sayı değil ise ve son karakter sayı değil ise
          if(numb === "-"){//son karakter işlem ise ve gelen değer eksi ise ucuna ekler
            setNumber(value => "" + value + numb)
          }
          else{
            setNumber(value => "" + value.slice(0, value.length - 1) + numb)
          }
        }
        else {//gelen değerleri uc uca ekler
          setNumber(value => "" + value + numb)
        }
      }
      else {
        if (!isNaN(numb)) {//eşittirden sonra eğer sayı gelirse ekrandaki sayıyı siler yeni gönderileni basar
          setNumber("" + numb)
        }
        else {//eşittirden sonra işlem karakterleri gelirse ucuna ekler
          setNumber(value => "" + value + numb)
        }
      }
    }
    else {//ilk değer sıfıra

      if (numb === ".")
        setNumber("0" + numb)
      else
        if (isNaN(numb)) {
          if (numb === "-")
            setNumber(value => "" + value + numb)
        }
        else {
          setNumber("" + numb)
        }


    }




    setNewNumber(true)
  }


  const sonucGoster = () => {
    setNumber(
      eval(
        number === ""
          ? "0"
          : isNaN(number[number.length - 1])
            ? number.slice(0, number.length - 1)
            : number
      )
    )

    setNewNumber(false)
  }

  const sifirla = () => {
    setNumber("")
    setNewNumber(true)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />
      <View style={styles.inpusView}>
        <Text style={{ fontSize: 80, color: "white", paddingRight: 40, }}>{number}</Text>
      </View>
      <View styles={styles.buttonsViewContainer}>
        <View style={styles.buttonsView}>
          <TouchableOpacity onPress={() => sifirla()}><View style={styles.buttonsGray}><Text style={styles.buttonText}>AC</Text></View></TouchableOpacity>
          <View style={styles.buttonsGray}><Text style={styles.buttonText}>+/-</Text></View>
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
