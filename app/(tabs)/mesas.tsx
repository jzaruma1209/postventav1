import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const MESAS = [
  { id: '1', number: '1', status: 'occupied' },
  { id: '2', number: '4', status: 'occupied' },
  { id: '3', number: '6', status: 'occupied' },
  { id: '4', number: '', status: 'available' },
  { id: '5', number: '', status: 'available' },
  { id: '6', number: '', status: 'available' },
  { id: '7', number: '', status: 'available' },
  { id: '8', number: '', status: 'available' },
  { id: '9', number: '', status: 'available' },
];

const PEDIDOS = [
  { id: '1', number: '1', status: 'occupied' },
  { id: '2', number: '2', status: 'occupied' },
  { id: '3', number: '3', status: 'occupied' },
];

export default function MesasScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoCircle}>
            <MaterialIcons name="restaurant" size={24} color="#fff" />
          </View>
          <TouchableOpacity style={styles.addButton}>
            <MaterialIcons name="add" size={28} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Mesas Section */}
          <Text style={styles.sectionTitle}>Mesas</Text>
          <View style={styles.grid}>
            {MESAS.map((mesa) => (
              <TouchableOpacity
                key={mesa.id}
                style={[
                  styles.card,
                  mesa.status === 'occupied' ? styles.cardOccupied : styles.cardAvailable,
                ]}
              >
                <View style={styles.cardHeader}>
                  {mesa.number ? (
                    <Text style={styles.cardNumber}>{mesa.number}</Text>
                  ) : (
                    <View />
                  )}
                  <TouchableOpacity>
                    <MaterialIcons name="more-horiz" size={22} color="#333" />
                  </TouchableOpacity>
                </View>
                <View style={styles.cardFooter}>
                  <Text style={styles.cardSubtext}>
                    {mesa.status === 'occupied' ? 'mesa en uso' : ''}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Pedidos Section */}
          <Text style={styles.sectionTitle}>Pedidos</Text>
          <View style={styles.grid}>
            {PEDIDOS.map((pedido) => (
              <TouchableOpacity
                key={pedido.id}
                style={[styles.card, styles.cardOccupied]}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.cardNumber}>{pedido.number}</Text>
                  <TouchableOpacity>
                    <MaterialIcons name="more-horiz" size={22} color="#333" />
                  </TouchableOpacity>
                </View>
                <View style={styles.cardFooter}>
                  <Text style={styles.cardSubtext}>pedido activo</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

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
  scrollContent: {
    paddingHorizontal: 16,
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
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Section Title */
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginTop: 8,
    marginBottom: 14,
  },

  /* Grid */
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 16,
    padding: 12,
    justifyContent: 'space-between',
  },
  cardOccupied: {
    backgroundColor: '#D4A07A',
  },
  cardAvailable: {
    backgroundColor: '#5B9E8F',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: '#333',
  },
  cardFooter: {
    marginTop: 'auto',
  },
  cardSubtext: {
    fontSize: 9,
    color: '#555',
  },

  /* Divider */
  divider: {
    height: 2,
    backgroundColor: '#3aa',
    marginVertical: 20,
    borderRadius: 1,
  },
});
