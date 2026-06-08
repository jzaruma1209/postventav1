import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const FILTERS = ['comidas rapidas', 'bebidas', 'combos', 'bebidas', 'pedidos'];

const MESAS_POR_COBRAR = [
  {
    id: '1',
    name: 'mesa 1',
    price: '9.75$',
    nota: 'nota: client con camiseta roja',
  },
  {
    id: '2',
    name: 'pedido 1',
    price: '9.75$',
    nota: '',
  },
  {
    id: '3',
    name: 'mesa 1',
    price: '9.75$',
    nota: '',
  },
  {
    id: '4',
    name: 'mesa 1',
    price: '9.75$',
    nota: '',
  },
  {
    id: '5',
    name: 'mesa 1',
    price: '9.75$',
    nota: '',
  },
  {
    id: '6',
    name: 'mesa 1',
    price: '9.75$',
    nota: '',
  },
];

export default function HomeScreen() {
  const [activeFilter, setActiveFilter] = useState(-1);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoCircle}>
            <MaterialIcons name="restaurant" size={24} color="#fff" />
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

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.actionBtnIcon}>
              <MaterialIcons name="add" size={22} color="#fff" />
            </View>
            <Text style={styles.actionBtnText}>Mesa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.actionBtnIcon}>
              <MaterialIcons name="add" size={22} color="#fff" />
            </View>
            <Text style={styles.actionBtnText}>cobro fast</Text>
          </TouchableOpacity>
        </View>

        {/* Mesas por cobrar */}
        <Text style={styles.sectionTitle}>Mesas por cobrar</Text>

        <ScrollView
          style={styles.mesasList}
          contentContainerStyle={styles.mesasContent}
          showsVerticalScrollIndicator={false}
        >
          {MESAS_POR_COBRAR.map((mesa) => (
            <View key={mesa.id} style={styles.mesaItem}>
              <View style={styles.mesaImageContainer}>
                <View style={styles.mesaImage}>
                  <MaterialIcons name="lunch-dining" size={28} color="#a0785a" />
                </View>
              </View>
              <View style={styles.mesaInfo}>
                <Text style={styles.mesaName}>{mesa.name}</Text>
                {mesa.nota ? (
                  <Text style={styles.mesaNota} numberOfLines={1}>{mesa.nota}</Text>
                ) : null}
              </View>
              <Text style={styles.mesaPrice}>{mesa.price}</Text>
              <TouchableOpacity style={styles.mesaMenu}>
                <MaterialIcons name="more-vert" size={20} color="#333" />
              </TouchableOpacity>
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
    backgroundColor: '#333',
  },
  filterChipActive: {
    backgroundColor: '#000',
  },
  filterText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: '700',
  },

  /* Action Buttons */
  actionButtons: {
    paddingHorizontal: 40,
    marginTop: 20,
    gap: 12,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    paddingVertical: 16,
    gap: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  actionBtnIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtnText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#222',
  },

  /* Section Title */
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#888',
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 8,
    fontStyle: 'italic',
  },

  /* Mesas List */
  mesasList: {
    flex: 1,
  },
  mesasContent: {
    paddingHorizontal: 16,
  },
  mesaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  mesaImageContainer: {
    marginRight: 12,
  },
  mesaImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f5efe8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mesaInfo: {
    flex: 1,
    marginRight: 8,
  },
  mesaName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
  mesaNota: {
    fontSize: 10,
    color: '#aaa',
    marginTop: 2,
    fontStyle: 'italic',
  },
  mesaPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginRight: 4,
  },
  mesaMenu: {
    padding: 4,
  },
});
