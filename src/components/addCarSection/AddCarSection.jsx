import React, {useState} from "react";
import {Input} from "../../common/input/Input";
import {SubmitButton} from "../../common/submitButton/SubmitButton";
import {Textarea} from "../../common/textarea/textarea";
import {Checkbox} from "../../common/checkbox/Checkbox";
import {AddImageButton} from "../../common/addImageButton/AddImageButton";

const sizes = {
    small: 'w-[162px]',
    large: 'w-[190px]'
};

const checkboxLabel = (
    <div className="font-roboto font-bold text-[10px] leading-[12px] text-regal-blue text-center select-none">
        <span>Я согласен(на), что фирма использует мои личные данные на основе</span>
        <br/>
        <a href="/polici" className="text-regal-green z-10">Политики конфедициальности</a>
    </div>
);
const cirInformation = [
    {serialNumber: 1, label: 'Марка', id: 'mark', value: ''},
    {serialNumber: 2, label: 'Модель', id: 'model', value: ''},
    {serialNumber: 3, label: 'Мотор', id: 'motor', value: ''},
    {serialNumber: 4, label: 'Год', id: 'year', value: ''},
    {serialNumber: 5, label: 'Топливо', id: 'fuel', value: ''},
    {serialNumber: 6, label: 'КПП', id: 'transmission', value: ''},
    {serialNumber: 7, label: 'Пробег', id: 'mileage', value: ''},
    {serialNumber: 8, label: 'Техосмотр', id: 'inspection', value: ''},
    {serialNumber: 9, label: 'Желаемая цена', id: 'desired_price', value: ''},
];

const userInformation = [
    {serialNumber: 1, label: 'Имя', id: 'name', value: '', size: 'small'},
    {serialNumber: 2, label: 'Почта', id: 'mail', value: '', size: 'large'},
    {serialNumber: 3, label: 'Телефон', id: 'phone', value: '', size: 'small'},
    {serialNumber: 4, label: 'Город', id: 'city', value: '', size: 'large'},
];

const getCurrent = (method, fieldLabel) => {
    if (method === 'find') {
        return (f) => f.label === fieldLabel;
    } else if (method === 'filter') return (f) => f.label !== fieldLabel;
};

export const AddCarSection = () => {
    const [fieldsCarInfoArr, setFieldsCarInfoArr] = useState(cirInformation);
    const [fieldsUserInfoArr, setFieldsUserInfoArr] = useState(userInformation);
    const [isAgree, setIsAgree] = useState(false);
    const [message, setMessage] = useState('');

    const handleChangeCarInformation = (fieldLabel, value) => {
        const currentField = fieldsCarInfoArr.find(getCurrent('find', fieldLabel));
        currentField['value'] = value;
        const newArr = [...fieldsCarInfoArr.filter(getCurrent('filter', fieldLabel)), currentField]
        setFieldsCarInfoArr(newArr.sort((a, b) => a.serialNumber - b.serialNumber))
    };

    const handleChangeUserInformation = (fieldLabel, value) => {
        const currentField = fieldsUserInfoArr.find(getCurrent('find', fieldLabel));
        currentField['value'] = value;
        const newArr = [...fieldsUserInfoArr.filter(getCurrent('filter', fieldLabel)), currentField]
        setFieldsUserInfoArr(newArr.sort((a, b) => a.serialNumber - b.serialNumber))
    };

    return (
        <section id="AddCarSection" className="bg-hero-pattern bg-[length:444px] bg-no-repeat bg-right pt-[90px]">
            <form id="addData" method="post" action=''>
                <div className="relative w-[694px] mt-[64px] ml-[112px]">
                    <div className="relative pl-[124px] mb-[38px]">
                        <h2 className="font-arimo font-normal text-[18px] leading-[21px] text-regal-blue">Данные
                            автомобиля</h2>
                    </div>

                    <div className="flex flex-wrap gap-y-[18px] gap-x-[30px] w-[491px]">
                        {
                            fieldsCarInfoArr.map((fieldInfo) => {
                                return (
                                    <div key={fieldInfo.id}>
                                        <Input
                                            id={fieldInfo.id}
                                            label={fieldInfo.label}
                                            handleChange={handleChangeCarInformation}
                                            value={fieldInfo.value}
                                            width={"w-[100px]"}
                                            height={"h-[20px]"}
                                        />
                                    </div>)
                            })
                        }

                        <div>
                            <AddImageButton
                                buttonName="Добавить фото"
                                onClick={() => console.log('ADD')}
                                width={"w-[361px]"}
                                height={"h-[29px]"}
                                id={'addImage'}
                            />
                        </div>
                    </div>
                </div>

                <div className="relative w-[385px] mt-[24px] ml-[112px]">
                    <div className="relative pl-[124px] mb-[24px]">
                        <h2 className="font-arimo font-normal text-[18px] leading-[21px] text-regal-blue">Другие данные</h2>
                    </div>

                    <div className="flex flex-wrap gap-y-[18px] gap-x-[33px] w-[491px] mb-[24px]">
                        {
                            userInformation.map((fieldInfo) => {
                                return (
                                    <div key={fieldInfo.id}>
                                        <Input
                                            id={fieldInfo.id}
                                            label={fieldInfo.label}
                                            handleChange={handleChangeUserInformation}
                                            value={fieldInfo.value}
                                            width={sizes[fieldInfo.size]}
                                            height={"h-[22px]"}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="mb-[23px]">
                        <Textarea
                            id={'textarea'}
                            label={'Сообщение'}
                            handleChange={(e) => setMessage(e.target.value)}
                            value={message}
                            width={"w-[100%]"}
                            height={"h-[58px]"}
                        />
                    </div>

                    <div className='mb-[22px]'>
                        <Checkbox
                            label={checkboxLabel}
                            checked={isAgree}
                            handleCheck={setIsAgree}
                            width={'w-[17px]'}
                            height={'h-[17px]'}
                        />
                    </div>
                    <div>
                        <div className="w-max mx-auto">
                            <SubmitButton
                                buttonName="Отправить"
                                onClick={() => console.log('submit')}
                                width={"w-[190px]"}
                                height={"h-[22px]"}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};