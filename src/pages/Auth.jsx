import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../firebase"

function Auth() {
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <button 
      onClick={handleGoogleLogin}
      className="bg-red-500 text-white p-2 rounded-lg flex items-center gap-2"
    >
      <img src="https://www.google.com/favicon.ico" className="w-4 h-4" />
      Login con Google
    </button>
  )
}
