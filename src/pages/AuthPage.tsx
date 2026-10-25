
import { useAuthForm } from '../hooks/useAuthForm';
import { AuthHeader }  from '../components/auth/AuthHeader';
import  { FlexLayout } from '../components/layout/FlexLayout';
import { SocialAuth } from '../components/auth/SocialAuth';
import { InputField } from '../components/common/InputField';
import catHomePage from "../assets/catHomePage.png"
import { useNavigate } from 'react-router';

export function AuthPage() {
    const { isLoginMode, toggleMode } = useAuthForm();

    const navigate = useNavigate();

    return (
        <FlexLayout gap="gap-10" bg='bg-background' padding='p-10'>
            <section className='flex flex-col items-center justify-center'>
                <h2 className="font-mono font-normal text-xl text-center">{isLoginMode ? "WELCOME BACK TO" : "WELCOME TO"}</h2>
                <h1 className="font-serif font-black text-5xl text-center">Simple Pages</h1>
                <img className="w-120 h-120 object-cover" src={catHomePage} alt="Cat" />
            </section>
        
            <section id='authContainer' className='w-90'>
                {/* MINI BROWSER */}
                <div className='border-1 border-foreground rounded-xl bg-white shadow-2xl h-120 flex flex-col'>
                    <AuthHeader isLoginMode={isLoginMode} onSwitch={toggleMode}/>
                    
                    <div className="p-8 flex-1 min-h-0 flex flex-col justify-around ">
                        <div>
                            <InputField type="text" placeholder="Username"></InputField>
                            <InputField type="password" placeholder="Password"></InputField>
                            
                            {!isLoginMode && (
                                <InputField type="password" placeholder="Confirm Password"></InputField>
                            )}

                            <button onClick={() => navigate("./app")} type="button" 
                                className='w-full bg-amber border-1 border-foreground rounded-md p-2 cursor-pointer'>
                                    <strong>GO</strong>
                            </button>
                            
                            {isLoginMode && <a href="#" className='text-black text-center font-normal font-mono uppercase underline'>
                                <small>Forgot your password?</small>
                            </a>}

                        </div>

                        <SocialAuth>
                            <p className='font-medium'>{isLoginMode ? "Continue with Google" : "Sign Up with Google"}</p>
                        </SocialAuth>
                    </div>
                </div>

                <p className='text-center mt-2'>
                    <a className='underline text-ink cursor-pointer' onClick={(e) => { e.preventDefault(); toggleMode(); }}>
                        {isLoginMode ? "Don't have an account? Sign up" : "Already have an account? Log in"}
                    </a>
                </p>

            </section>
        </FlexLayout>
    );
}