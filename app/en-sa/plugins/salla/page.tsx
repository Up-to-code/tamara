import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-plugins-salla-header.html';
import body from '@/components/exact/en-sa-plugins-salla-body.html';
import footer from '@/components/exact/en-sa-plugins-salla-footer.html';
import inline from '@/components/exact/en-sa-plugins-salla.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
