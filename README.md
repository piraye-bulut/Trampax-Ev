# Trampax Ev Takası Uygulaması

## Proje Açıklaması
Bu uygulamada kullanıcılar mevcut evleri görüntüleyebilir, takas teklifinde bulunabilir ve bu tekliflerin durumlarını izleyebilirler.

### Özellikler
1. **Ev Listesi**
   - Varsayılan olarak birkaç ev listelenmiştir.
   - Her evin bir isim, lokasyon ve kısa açıklaması bulunur.
   
2. **Ev Detay Sayfası**
   - Kullanıcı bir evin üzerine tıkladığında detay sayfası açılır.
   - Detay sayfasında evin ismi, lokasyonu, açıklaması ve takas durumu  gösterilir.

3. **Takas Teklifi Gönderme**
   - Detay sayfasında bir "Takas Teklifi Gönder" butonu bulunur.
   - Bu butona basıldığında, evin takas durumu "Teklif Gönderildi" olarak güncellenir.

4. **Takas Durum Yönetimi**
   - Kullanıcı, gönderdiği tüm tekliflerin durumunu bir "Tekliflerim" sayfasından görüntüleyebilir.

### Teknik Gereksinimler
- **UI/UX**:
   - React Native bileşenleriyle basit ama etkili bir arayüz oluşturulmuştur.
   - Listeleme bileşeni olan FlatList kullanılmıştır.
- **Veri Yönetimi**:
   - Takas teklifleri ve ev listesi durumu uygulama belleğinde `useState` veya `Context API` kullanılarak saklanmıştır.
   
- **Navigasyon**:
   - React Navigation kullanılarak en az üç sayfa oluşturulmuştur:
      1. **Ana Sayfa:** Ev listesi ve sayfanın altında kullanıcının ev ekleyebilmesi için buton.
      2. **Ev Detayları:** Seçilen evin detayları ve takas butonu.
      3. **Tekliflerim:** Gönderilen takas tekliflerinin listesi.

### Bonus Özellikler (İsteğe Bağlı)
- Kullanıcıların listeye yeni bir ev ekleyebilmesi.
- Uygulama teması için Light/Dark mode desteği. Sağ üst köşede ay ikonuna basılarak karanlık moda geçilebilir.

## Çalıştırma Talimatları
- cd HomeExchangeApp 
-   npm install ile proje dizinindeki bağıımlılıklar yüklenir.
-   npm install @react-navigation/native @react-navigation/stack
-   npm install react-native-screens react-native-safe-area-context
-   npm install @react-navigation/bottom-tabs
-   expo install @expo/vector-icons
-   npm install react-native-image-picker
-   terminalden: npx expo start komutu ile projeyi çalıştırabilirsiniz web üzerinde görmek için bu komut çalıştıktan sonra klavyeden w'ya basarak proje web üzerinde görüntülenebilir.