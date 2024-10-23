

export const PreferenceRegister = () => {
    return (
        <div className="p-6 bg-green-50 rounded-md border border-green-300 max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Dueño de mascotas:</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between bg-green-100 p-4 rounded-lg">
                    <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 18.121A3 3 0 003 15V9a3 3 0 013-3h12a3 3 0 013 3v6a3 3 0 01-2.121 2.879l-3.879 1.122a4 4 0 01-1.414 0l-3.879-1.122a3 3 0 01-1.414-2.879V9a3 3 0 00-.879-2.121l-1.122-1.121" />
                        </svg>
                        Paseos
                    </span>
                    <input type="checkbox" checked className="form-checkbox h-5 w-5 text-green-600" />
                </div>
                <div className="flex items-center justify-between bg-green-100 p-4 rounded-lg">
                    <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 18.121A3 3 0 003 15V9a3 3 0 013-3h12a3 3 0 013 3v6a3 3 0 01-2.121 2.879l-3.879 1.122a4 4 0 01-1.414 0l-3.879-1.122a3 3 0 01-1.414-2.879V9a3 3 0 00-.879-2.121l-1.122-1.121" />
                        </svg>
                        Adopciones

                    </span>
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                </div>
                <div className="flex items-center justify-between bg-green-100 p-4 rounded-lg">
                    <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 18.121A3 3 0 003 15V9a3 3 0 013-3h12a3 3 0 013 3v6a3 3 0 01-2.121 2.879l-3.879 1.122a4 4 0 01-1.414 0l-3.879-1.122a3 3 0 01-1.414-2.879V9a3 3 0 00-.879-2.121l-1.122-1.121" />
                        </svg>
                        Adiestramiento
                    </span>
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                </div>
                <div className="flex items-center justify-between bg-green-100 p-4 rounded-lg">
                    <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 18.121A3 3 0 003 15V9a3 3 0 013-3h12a3 3 0 013 3v6a3 3 0 01-2.121 2.879l-3.879 1.122a4 4 0 01-1.414 0l-3.879-1.122a3 3 0 01-1.414-2.879V9a3 3 0 00-.879-2.121l-1.122-1.121" />
                        </svg>
                        Entrenamiento
                    </span>
                    <input type="checkbox" checked className="form-checkbox h-5 w-5 text-green-600" />
                </div>
                <div className="flex items-center justify-between bg-green-100 p-4 rounded-lg">
                    <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 18.121A3 3 0 003 15V9a3 3 0 013-3h12a3 3 0 013 3v6a3 3 0 01-2.121 2.879l-3.879 1.122a4 4 0 01-1.414 0l-3.879-1.122a3 3 0 01-1.414-2.879V9a3 3 0 00-.879-2.121l-1.122-1.121" />
                        </svg>
                        Tiendas afiliadas
                    </span>
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                </div>
                <div className="flex items-center justify-between bg-green-100 p-4 rounded-lg">
                    <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 18.121A3 3 0 003 15V9a3 3 0 013-3h12a3 3 0 013 3v6a3 3 0 01-2.121 2.879l-3.879 1.122a4 4 0 01-1.414 0l-3.879-1.122a3 3 0 01-1.414-2.879V9a3 3 0 00-.879-2.121l-1.122-1.121" />
                        </svg>
                        Lugares pet-friendly
                    </span>
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                </div>
            </div>
        </div>

    )
}
