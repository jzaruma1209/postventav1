import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SwipeableRow } from '@/components/swipeable-row';

const FILTERS = ['todas las mesas', 'comidas rapidas', 'combos', 'bebidas'];

const ORDERS = [
  {
    id: '1',
    name: 'combo 1 + cola de litro',
    mesa: 'mesa 7',
    nota: 'Nota: se hizo un descuento por que pidio sin papas',
    price: '12.50$',
    time: '6:30 pm',
  },
  {
    id: '2',
    name: 'combo 3 + porcion de papas',
    mesa: 'mesa 3',
    nota: 'Nota:',
    price: '9.75$',
    time: '6:30 pm',
  },
  {
    id: '3',
    name: 'combo 1 + cola de litro',
    mesa: 'mesa 7',
    nota: 'Nota: se hizo un descuento por que pidio sin papas',
    price: '12.50$',
    time: '6:30 pm',
  },
  {
    id: '4',
    name: 'combo 3 + porcion de papas',
    mesa: 'mesa 3',
    nota: 'Nota:',
    price: '9.75$',
    time: '6:30 pm',
  },
  {
    id: '5',
    name: 'combo 3 + porcion de papas',
    mesa: 'mesa 3',
    nota: 'Nota:',
    price: '9.75$',
    time: '6:30 pm',
  },
  {
    id: '6',
    name: 'combo 1 + cola de litro',
    mesa: 'mesa 7',
    nota: 'Nota: se hizo un descuento por que pidio sin papas',
    price: '12.50$',
    time: '6:30 pm',
  },
  {
    id: '7',
    name: 'combo 3 + porcion de papas',
    mesa: 'mesa 3',
    nota: 'Nota:',
    price: '9.75$',
    time: '6:30 pm',
  },
];

export default function ResumenScreen() {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <View style={styles.logoCircle}>
                <MaterialIcons name="restaurant" size={24} color="#fff" />
              </View>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.headerIconBtn}>
                <MaterialIcons name="filter-list" size={22} color="#333" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerIconBtn}>
                <MaterialIcons name="swap-vert" size={22} color="#333" />
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
                onPress={() => setActiveFilter(index)}
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

          {/* Summary Cards */}
          <View style={styles.summaryRow}>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryLabel}>Vendido</Text>
              <Text style={styles.summaryValue}>$48.00</Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryLabel}>Invertido</Text>
              <Text style={styles.summaryValue}>$22.00</Text>
            </View>
          </View>

          <View style={styles.gananciaCard}>
            <Text style={styles.gananciaLabel}>Ganancia estimada</Text>
            <Text style={styles.gananciaValue}>$22.00</Text>
          </View>

          {/* Orders List - Swipeable */}
          <ScrollView
            style={styles.ordersList}
            contentContainerStyle={styles.ordersContent}
            showsVerticalScrollIndicator={false}
          >
            {ORDERS.map((order) => (
              <SwipeableRow
                key={order.id}
                onEdit={() => console.log('Editar', order.id)}
                onPin={() => console.log('Fijar', order.id)}
                onMore={() => console.log('Más', order.id)}
                onArchive={() => console.log('Archivar', order.id)}
              >
                <View style={styles.orderItem}>
                  <View style={styles.orderImageContainer}>
                    <View style={styles.orderImage}>
                      <MaterialIcons name="lunch-dining" size={28} color="#a0785a" />
                    </View>
                  </View>
                  <View style={styles.orderInfo}>
                    <Text style={styles.orderName} numberOfLines={1}>{order.name}</Text>
                    <Text style={styles.orderMesa}>{order.mesa}</Text>
                    <Text style={styles.orderNota} numberOfLines={1}>{order.nota}</Text>
                  </View>
                  <View style={styles.orderRight}>
                    <Text style={styles.orderPrice}>{order.price}</Text>
                    <Text style={styles.orderTime}>{order.time}</Text>
                  </View>
                </View>
              </SwipeableRow>
            ))}
            {/* Spacer for bottom tab bar */}
            <View style={{ height: 100 }} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
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
  logoContainer: {},
  logoCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerIconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
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

  /* Summary Cards */
  summaryRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginTop: 16,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 13,
    color: '#aaa',
    fontWeight: '500',
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '700',
  },

  /* Ganancia */
  gananciaCard: {
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: '#333',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  gananciaLabel: {
    fontSize: 13,
    color: '#aaa',
    fontWeight: '500',
    marginBottom: 4,
  },
  gananciaValue: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '800',
  },

  /* Orders */
  ordersList: {
    flex: 1,
    marginTop: 16,
  },
  ordersContent: {
    paddingHorizontal: 0,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  orderImageContainer: {
    marginRight: 12,
  },
  orderImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f5efe8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderInfo: {
    flex: 1,
    marginRight: 8,
  },
  orderName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
  orderMesa: {
    fontSize: 12,
    color: '#888',
    marginTop: 1,
  },
  orderNota: {
    fontSize: 10,
    color: '#aaa',
    marginTop: 2,
  },
  orderRight: {
    alignItems: 'flex-end',
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },
  orderTime: {
    fontSize: 11,
    color: '#999',
    marginTop: 2,
  },
});
