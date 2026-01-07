import { Text,View, StyleSheet,TouchableOpacity,TextInput, ActivityIndicator,KeyboardAvoidingView ,Pressable, Button} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import axios from "axios";
const API_URL =  "https://dev-e-bank-server-ksai.encr.app/api/v1";
import { useRouter } from "expo-router";


export default function Signup(){
    const [form, setForm] = useState({email:'', password:''})
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState('');
    const {login} = useAuth();
    const router = useRouter();

    const submit= async ()=>{
        try{
            console.log("Submitting login form:", form);
            const res = await axios.post(`${API_URL}/signin`, form);
            console.log('login response', res.data)
             await login(res.data)
             console.log('Login complete');
        }catch(err:any){
             if (err.response) {
                    console.error("Backend response:", err.response.data);
                    console.error("Status code:", err.response.status);
                } else {
                    console.error("Network or other error:", err.message);
  }
        }
    }
    return(
        <SafeAreaView style={styles.screen} >
            <View>
                <Text>Datrisoft Banking</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>Secure your finances in minutes</Text>

                <TextInput
                placeholder="Email"
                style={styles.input}
                value={form.email}
                onChangeText={(t) => setForm({ ...form, email: t.trim() })}
                keyboardType="email-address"
                autoCapitalize="none"
                />

                <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                value={form.password}
                onChangeText={(t) => setForm({ ...form, password: t })}
                />

                {error ? <Text style={styles.error}>{error}</Text> : null}

                <TouchableOpacity onPress={submit} style={styles.button}>
                {loading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    <Text style={styles.buttonText}>Sign In</Text>
                )}
                </TouchableOpacity>
                <View>
                        <Text style={styles.signup}>
                    Don't have an account?{" "}
                    <Text
                        style={styles.signupLink}
                        onPress={() => router.push("/(auth)/sign-up")}
                    >
                        Sign Up
                    </Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    screen: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    // backgroundColor: "#FFD41D",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 6,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#0B1F44",
    marginBottom: 6,
  },

  subtitle: {
    color: "#7A869A",
    marginBottom: 24,
  },

  input: {
    backgroundColor: "#F1F4F8",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    marginBottom: 14,
    color: "#0B1F44",
  },

  error: {
    color: "#D93025",
    marginBottom: 12,
    fontSize: 13,
  },

  button: {
    // backgroundColor: "#1C6EF2",
    backgroundColor: "#D73535",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  signup:{
    padding: 5,
    marginVertical:10,
  },
    signupLink: {
    color: "#D73535",
    fontWeight: "600",
    textDecorationLine:"underline",
  },
})
