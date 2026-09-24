import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-candidate-privacy-notice-header.html';
import body from '@/components/exact/en-sa-candidate-privacy-notice-body.html';
import footer from '@/components/exact/en-sa-candidate-privacy-notice-footer.html';
import inline from '@/components/exact/en-sa-candidate-privacy-notice.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
