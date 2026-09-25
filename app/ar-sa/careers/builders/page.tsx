import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-careers-builders-header.html';
import body from '@/components/exact/ar-sa-careers-builders-body.html';
import footer from '@/components/exact/ar-sa-careers-builders-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"69105a297fad8b2d6acd43de","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
