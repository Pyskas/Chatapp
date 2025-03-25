import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const { signup, isSigningUp } = useAuthStore();

    const validateForm = () => {
        if (!formData.fullName.trim()) return toast.error("Заполните Имя");
        if (!formData.email.trim()) return toast.error("Заполните почту");
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Неверная почта");
        if (!formData.password) return toast.error("Заполните пароль");
        if (formData.password.length < 6) return toast.error("Пароль должен состоять из 6 символов");

        return true
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = validateForm()

        if(success === true) signup(formData);
    };

    return <div className="grid min-h-screen lg:grid-cols-2">
        {/* левая сторона */}
        <div className="flex flex-col items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
            {/* ЛОГО */}
            <div className="mb-8 text-center">
                <div className="flex flex-col items-center gap-2 group">
                    <div
                    className="flex items-center justify-center transition-colors size-12 rounded-xl bg-primary/10 group-hover:bg-primary/20"
                    >
                        <MessageSquare className="size-6 text-primary" />
                    </div>
                    <h1 className="mt-2 text-2xl font-bold">Создать аккаунт</h1>
                    <p className="text-base-content/60">Создайте аккаунт бесплатно</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
                <label className="label">
                    <span className="font-medium label-text">Полное Имя</span>
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="size-5 text-base-content/40" />
                    </div>
                    <input 
                    type="text"
                    className={`input input-bordered w-full pl-10`}
                    placeholder="Иван Иванов" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                </div>
            </div>
            
            <div className="form-control">
                <label className="label">
                    <span className="font-medium label-text">Почта</span>
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail className="size-5 text-base-content/40" />
                    </div>
                    <input 
                    type="email"
                    className={`input input-bordered w-full pl-10`}
                    placeholder="ivan.ivanov@email.ru" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="font-medium label-text">Пароль</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="w-full btn btn-primary" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Загрузка...
                </>
              ) : (
                "Создать аккаунт"
              )}
            </button>
            </form>

            <div className="text-center">
            <p className="text-base-content/60">
              У вас уже есть аккаунт?{" "}
              <Link to="/login" className="link link-primary">
                Войти
              </Link>
            </p>
          </div>
        </div>
        </div>

        {/* правая сторона */}

        <AuthImagePattern
            title="Присоединяйтесь к нам"
            subtitle="Общайтесь с друзьями,делись моментами,оставайтесь с нами"
        />

    </div>;
};
export default SignUpPage;
