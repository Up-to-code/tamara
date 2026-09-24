import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-media-center-header.html';
import body from '@/components/exact/en-sa-media-center-body.html';
import footer from '@/components/exact/en-sa-media-center-footer.html';
import inline from '@/components/exact/en-sa-media-center.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
