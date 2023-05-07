import  {createContext, useEffect, useState} from 'react'; 

export const DarkModeContext = createContext();

export function DarkModeProvider ({children}) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
        updateDarkMode(!darkMode);
    }

    // 첫 마운트 될 때 로컬스토리지에 있는 데이터를 읽어와서 적절하게 내부 상태 업데이트
    useEffect(()=> {
        const isDark =
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches);
      setDarkMode(isDark);      // darkMode 상태값 변경 함수
      updateDarkMode(isDark);   // dark class 넣는 함수
    }, [])

    return(
        <DarkModeContext.Provider
            value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
}

function updateDarkMode(darkMode) {
    if(darkMode){
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';        
    } else{
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}

// 다크모드 셋팅 기억하기