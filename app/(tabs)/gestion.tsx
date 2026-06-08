import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const MAIN_OPTIONS = [
  { icon: 'people', label: 'Usuarios', desc: 'Administrar empleados y roles' },
  { icon: 'restaurant-menu', label: 'Producto y Menú', desc: 'Editar platos, precios y categorías' },
  { icon: 'table-restaurant', label: 'Mesas', desc: 'Configurar mesas del local' },
  { icon: 'payments', label: 'Pagos', desc: 'Métodos de pago y facturación' },
  { icon: 'store', label: 'Negocios', desc: 'Datos y sucursales del negocio' },
];

const CONFIG_OPTIONS = [
  { icon: 'notifications', label: 'Notificaciones', desc: 'Alertas y avisos' },
  { icon: 'storage', label: 'Almacenamiento', desc: 'Espacio y datos guardados' },
  { icon: 'print', label: 'Impresora', desc: 'Configurar impresora de tickets' },
];

const HELP_OPTIONS = [
  { icon: 'help-outline', label: 'Ayuda y soporte', desc: '' },
  { icon: 'info-outline', label: 'Acerca de', desc: '' },
];

export default function GestionScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileAvatar}>
            <MaterialIcons name="restaurant" size={40} color="#fff" />
          </View>
          <Text style={styles.profileName}>Mi Restaurante</Text>
          <Text style={styles.profileRole}>Dueño / Administrador</Text>
        </View>

        {/* Main Settings */}
        <Text style={styles.sectionLabel}>Administración</Text>
        <View style={styles.card}>
          {MAIN_OPTIONS.map((item, index) => (
            <TouchableOpacity key={index} style={styles.optionRow}>
              <View style={styles.optionIconContainer}>
                <MaterialIcons name={item.icon as any} size={22} color="#555" />
              </View>
              <View style={styles.optionInfo}>
                <Text style={styles.optionLabel}>{item.label}</Text>
                <Text style={styles.optionDesc}>{item.desc}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={22} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Config Settings */}
        <Text style={styles.sectionLabel}>Configuración</Text>
        <View style={styles.card}>
          {CONFIG_OPTIONS.map((item, index) => (
            <TouchableOpacity key={index} style={styles.optionRow}>
              <View style={styles.optionIconContainer}>
                <MaterialIcons name={item.icon as any} size={22} color="#555" />
              </View>
              <View style={styles.optionInfo}>
                <Text style={styles.optionLabel}>{item.label}</Text>
                <Text style={styles.optionDesc}>{item.desc}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={22} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Help */}
        <Text style={styles.sectionLabel}>Otros</Text>
        <View style={styles.card}>
          {HELP_OPTIONS.map((item, index) => (
            <TouchableOpacity key={index} style={styles.optionRow}>
              <View style={styles.optionIconContainer}>
                <MaterialIcons name={item.icon as any} size={22} color="#555" />
              </View>
              <View style={styles.optionInfo}>
                <Text style={styles.optionLabel}>{item.label}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={22} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Spacer for bottom tab bar */}
        <View style={{ height: 100 }} />
      </ScrollView>
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

  /* Profile */
  profileSection: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 24,
  },
  profileAvatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#222',
  },
  profileRole: {
    fontSize: 13,
    color: '#999',
    marginTop: 4,
  },

  /* Section Label */
  sectionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#aaa',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 20,
    marginBottom: 8,
    marginLeft: 4,
  },

  /* Card */
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
    overflow: 'hidden',
  },

  /* Option Row */
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  optionInfo: {
    flex: 1,
    marginRight: 8,
  },
  optionLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },
  optionDesc: {
    fontSize: 11,
    color: '#999',
    marginTop: 2,
  },
});
