import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-careers-header.html';
import body from '@/components/exact/ar-sa-careers-body.html';
import footer from '@/components/exact/ar-sa-careers-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"68a13a53a85554700451c643","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
