import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const FILTERS = ['carnes', 'frutas', 'bebidas', 'legumbres', 'cereales'];

const PRODUCTS = [
  {
    id: '1',
    name: 'Pollo entero',
    fecha: 'fecha de compra: 12/04/2026',
    nota: 'Nota: se hizo un descuento por que pidio sin papas',
    cantidad: 11,
    price: '9.75$',
  },
  {
    id: '2',
    name: 'cucharas plastico',
    fecha: 'fecha de compra: 12/04/2026',
    nota: 'Nota:',
    cantidad: 3,
    price: '5.75$',
  },
  {
    id: '3',
    name: 'Pollo entero',
    fecha: 'fecha de compra: 12/04/2026',
    nota: 'Nota: se hizo un descuento por que pidio sin papas',
    cantidad: 11,
    price: '9.75$',
  },
  {
    id: '4',
    name: 'cucharas plastico',
    fecha: 'fecha de compra: 12/04/2026',
    nota: 'Nota:',
    cantidad: 3,
    price: '5.75$',
  },
];

export default function BodegaScreen() {
  const [activeFilter, setActiveFilter] = useState(-1);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoCircle}>
            <MaterialIcons name="restaurant" size={24} color="#fff" />
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.comprasBtn}>
              <Text style={styles.comprasBtnText}>compras totales</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton}>
              <MaterialIcons name="add" size={26} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersScroll}
          contentContainerStyle={styles.filtersContent}
        >
          {FILTERS.map((filter, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.filterChip,
                activeFilter === index && styles.filterChipActive,
              ]}
              onPress={() => setActiveFilter(activeFilter === index ? -1 : index)}
            >
              <Text
                style={[
                  styles.filterText,
                  activeFilter === index && styles.filterTextActive,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Products List */}
        <ScrollView
          style={styles.productsList}
          contentContainerStyle={styles.productsContent}
          showsVerticalScrollIndicator={false}
        >
          {PRODUCTS.map((product) => (
            <View key={product.id} style={styles.productItem}>
              <View style={styles.productRow}>
                <View style={styles.productImageContainer}>
                  <View style={styles.productImage}>
                    <MaterialIcons name="lunch-dining" size={28} color="#a0785a" />
                  </View>
                </View>
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productFecha}>{product.fecha}</Text>
                  <Text style={styles.productNota} numberOfLines={1}>{product.nota}</Text>
                </View>
                <View style={styles.productRight}>
                  <View style={styles.cantidadBadge}>
                    <Text style={styles.cantidadNumber}>{product.cantidad}</Text>
                  </View>
                  <Text style={styles.cantidadLabel}>cantidades</Text>
                  <Text style={styles.productPrice}>{product.price}</Text>
                </View>
              </View>
            </View>
          ))}
          {/* Spacer for bottom tab bar */}
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  logoCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  comprasBtn: {
    backgroundColor: '#222',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  comprasBtnText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Filters */
  filtersScroll: {
    maxHeight: 44,
    paddingLeft: 16,
  },
  filtersContent: {
    gap: 8,
    paddingRight: 16,
    alignItems: 'center',
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  filterChipActive: {
    backgroundColor: '#222',
    borderColor: '#222',
  },
  filterText: {
    fontSize: 12,
    color: '#555',
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#fff',
  },

  /* Products List */
  productsList: {
    flex: 1,
    marginTop: 16,
  },
  productsContent: {
    paddingHorizontal: 16,
  },
  productItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImageContainer: {
    marginRight: 12,
  },
  productImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f5efe8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productInfo: {
    flex: 1,
    marginRight: 8,
  },
  productName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
  },
  productFecha: {
    fontSize: 11,
    color: '#999',
    marginTop: 2,
  },
  productNota: {
    fontSize: 10,
    color: '#aaa',
    marginTop: 2,
    fontStyle: 'italic',
  },
  productRight: {
    alignItems: 'flex-end',
  },
  cantidadBadge: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 2,
  },
  cantidadNumber: {
    fontSize: 16,
    fontWeight: '800',
    color: '#222',
  },
  cantidadLabel: {
    fontSize: 9,
    color: '#aaa',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginTop: 2,
  },
});
