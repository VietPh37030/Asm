import { StyleSheet, Text, View,SafeAreaView,StatusBar,Image } from 'react-native'


export default function Wellcome() {
  return (
   // SafeAreaView đảm bảo nội dung không chồng lấn với các phần tử hệ thống
   <SafeAreaView style={styles.container}>
   {/* Đặt kiểu thanh trạng thái và màu nền */}
   <StatusBar barStyle="light-content" backgroundColor="#0C0F14" />

   {/* Container được căn giữa để chứa nội dung chính */}
   <View style={styles.centeredContainer}>
     {/* Hiển thị một hình ảnh từ nguồn */}
     <Image source={require('./Acces/coffe.png')} style={styles.image} />
   </View>
 </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C0F14',
      },
      centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
      },
})