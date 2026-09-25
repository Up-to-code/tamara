import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-app-header.html';
import body from '@/components/exact/ar-sa-app-body.html';
import footer from '@/components/exact/ar-sa-app-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"687e4e2b880cdfa5c2f121c4","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
