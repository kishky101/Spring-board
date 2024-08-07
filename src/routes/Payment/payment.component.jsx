import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import ClipboardCopy from '../../components/copy-to-clipboard/copy-to-clipboard.component';
import RoutesHero from '../../components/routes-hero/routes-hero.component';
import GetInTouch from '../../components/get-in-touch/get-in-touch.component';
import './payment.styles.scss';

const Payment = () => {
    return (
        <div className='payment-container'>
            <RoutesHero />
            <div className='payment-description'>
                <h4>Thank You for filling our admission form.</h4>
                <p>To confirm your seat, Kindly proceed to pay into any of our accounts listed below :</p>



                <div className='payment-details'>
                    <table>
                        <caption>
                            <h5>Payment in naira - <span>N40,000</span></h5>
                            <h6>Account Name: Springboard Language Concept</h6>
                        </caption>
                        <tbody>
                            <tr>
                                <td>GTBANK: </td>
                                <td>
                                <ClipboardCopy copyText={'0127131785'} />
                                </td>
                            </tr>
                            <tr>
                                <td>JAIZ:</td>
                                <td>
                                <ClipboardCopy copyText={'0003522837'} />
                                </td>
                            </tr>
                        </tbody> 
                    </table>
                    <table>
                        <caption>
                            <h5>OR</h5>
                            <h6>Account Name: Springboard Language Academy Ltd</h6>
                        </caption>
                        <tbody>
                            <tr>
                                <td>LOTUS: </td>
                                <td>
                                <ClipboardCopy copyText={'1000005169'} />
                                </td>
                            </tr>
                        </tbody> 
                    </table>
                </div>

                <div className='payment-details'>
                    <table>
                        <caption>
                            <h5>For Foreign Currency </h5>
                            <h6>Account Name: Tajudeen Adebayo</h6>
                        </caption>
                        <tbody>
                            <tr>
                                <td>US Dollar:</td>
                                <td>
                                <ClipboardCopy copyText={'0603687467'} />
                                <span>(60 dollars)</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Euro:</td>
                                <td>
                                <ClipboardCopy copyText={'0603687481'} />
                                <span>(55 Euros)</span>
                                </td>
                            </tr>
                            <tr>
                                <td>UK Pound:</td>
                                <td>
                                <ClipboardCopy copyText={'0603687474'} />
                                <span>(50 Pounds)</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                
                <span>Thank You.</span>
            </div>
            <GetInTouch />
        </div>
    )
}

export default Payment;