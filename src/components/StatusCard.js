import Card from '@material-tailwind/react/Card';
import CardRow from '@material-tailwind/react/CardRow';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardStatus from '@material-tailwind/react/CardStatus';
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';
import Icon from '@material-tailwind/react/Icon';
import { FiSettings } from "react-icons/fi";

export default function StatusCard({
    color,
    icon,
    title,
    amount,
    percentage,
    percentageColor,
    percentageIcon,
    date,
}) {
    return (
        <div className="px-4 mb-10">
            <Card>
                <CardRow>
                    <CardHeader color={color} iconOnly className="mb-0">
                    <FiSettings />                        
                    </CardHeader>

                    <CardStatus title={title} amount={amount} />
                </CardRow>

                <CardStatusFooter
                    amount={percentage}
                    color={percentageColor}
                    date={<h3>{date}</h3>}
                >
                    {/* <Icon color={percentageColor} name={percentageIcon} /> */}
                </CardStatusFooter>
            </Card>
        </div>
    );
}
