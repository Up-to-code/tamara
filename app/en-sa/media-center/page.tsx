import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-media-center-header.html';
import body from '@/components/exact/en-sa-media-center-body.html';
import footer from '@/components/exact/en-sa-media-center-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"68f884e88e19999e34d5c164","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
